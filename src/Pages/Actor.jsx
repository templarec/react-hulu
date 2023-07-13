import {myFetch} from "../Utilities/myFetch.js";
import {defer, useLoaderData} from "react-router-dom";
import {getCast, getMovie, getVideos} from "./Movie.jsx";
import {SliderMovies} from "../Components/SliderMovies.jsx";

export function Actor() {
    const {actor, movies} = useLoaderData();
    let gender = '';
    switch (actor.gender) {
        case 0:
            gender = 'Not specified';
            break;
        case 1:
            gender = 'Female';
            break;
        case 2:
            gender = 'Male';
            break;
        case 3:
            gender = 'Non-binary';
            break;
        default:
            gender = 'Not specified';


    }

    return (
        <>
            <section className={"container pt-[120px] flex flex-col items-center justify-evenly mx-auto"}>
                <h1 className={"text-4xl mt-6"}>{actor.name}</h1>
                <ul className={"flex text-[12px] text-gray-500"}>
                    {actor.also_known_as.map((ac, i) => (
                        <li className={"mx-2"} key={i}>{ac}</li>
                    ))}
                </ul>
                <div className="article flex flex-row-reverse gap-5 mt-10">
                    <div className="specs w-8/12">
                        <h2 className="bio text-3xl mb-5">
                            Biography
                        </h2>
                        <p>{actor.biography}</p>
                        <h2 className="bio text-3xl my-5">
                            Info:
                        </h2>
                        <p>Birthdate: {actor.birthday}</p>
                        <p>Gender: {gender}</p>
                        <p>Place of birth: {actor.place_of_birth}</p>
                        <a className={"underline hover:text-red-800 cursor-pointer"} href={actor.homepage}>Homepage</a>
                    </div>
                    <div className="profile-img w-4/12 p-2">
                        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt=""/>
                    </div>
                </div>
                <div className="movies container mt-5">
                    <SliderMovies movies={movies.cast}/>
                </div>
            </section>
        </>
    )
}

export const loadActor = async ({params}) => {
    const actor = await getActor(params.id);
    const movies = await getMovies(params.id)

    return defer({actor, movies})
}
export const getActor = async (id) => {
    return await myFetch('GET', `/person/${id}`, {language: 'en-US'})
        .then(res => res)
}

export const getMovies = async (id) => {
    return await myFetch('GET', `/person/${id}/movie_credits`, {language: 'en-US'})
        .then(res => res)
}