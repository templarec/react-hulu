
import {myFetch} from "../Utilities/myFetch.js";
import {defer, Link, useLoaderData} from "react-router-dom";
import LinkIcon from '@mui/icons-material/Link';
import PeopleIcon from '@mui/icons-material/People';
import 'react-tooltip/dist/react-tooltip.css'
import {Tooltip} from 'react-tooltip'
import SlideshowIcon from '@mui/icons-material/Slideshow';
import {SliderVid} from "../Components/SliderVid.jsx";

export function Movie() {

    const {movie, video} = useLoaderData();


    return (
        <>
            <section className={"container flex flex-col items-center justify-evenly mx-auto"}>
                <h1 className={"text-4xl mt-6 pl-[60px] "}>{movie.original_title}</h1>
                <h3 className={"text-2xl mt-1 mb-8 pl-[60px]"}>{movie.tagline}</h3>
                <div className="article flex flex-row items-center grid-cols-2 gap-10 ">
                    <div className="details flex flex-col justify-center p-5 gap-3 w-full">
                        <div className="synops">
                            <p>Overview:</p>
                            <p className={""}>
                                {movie.overview}
                            </p>
                        </div>
                        <hr/>
                        <div className="stats text-sm">
                            <p>Original language: {movie.original_language}</p>
                            <p>Release date: {movie.release_date}</p>
                            <p>Runtime: {movie.runtime} min</p>
                            <span>Status:</span> <span
                            className={movie.status === 'Released' ? "text-green-700" : "text-red-700"}>{movie.status}</span>
                            <p>Revenue: {movie.revenue.toLocaleString()} USD</p>
                        </div>
                        <hr/>
                        <div className="links">
                            <ul className={"flex flex-row justify-evenly"}>
                                <li data-tooltip-id="link-movie" data-tooltip-content="Official Website">
                                    <Link to={movie.homepage} target={"_blank"}>
                                        <LinkIcon/>
                                    </Link>
                                </li>
                                <li data-tooltip-id="link-cast" data-tooltip-content="Cast">
                                    <Link to={movie.homepage} target={"_blank"}>
                                        <PeopleIcon/>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="poster w-full">
                        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="placehold"/>
                    </div>
                    <Tooltip id={"link-movie"}/>
                    <Tooltip id={"link-cast"}/>
                </div>

            </section>


            <section className={"trailers container my-[25px] mx-auto"}>
                <SliderVid videos={video.results}/>
            </section>


        </>
    )
}

export const loadAll = async ({params}) => {
    const movie = await getMovie(params.id);
    const video = await getVideos(params.id)

    return defer({movie, video})
}
export const getMovie = async (id) => {
    return await myFetch('GET', `/movie/${id}`, {language: 'en-US'})
        .then(res => res)
}

export const getVideos = async (id) => {
    return await myFetch('GET', `/movie/${id}/videos`, {language: 'en-US'})
        .then(res => res)
}