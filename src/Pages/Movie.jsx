import {myFetch} from "../Utilities/myFetch.js";
import {defer, Link, useLoaderData} from "react-router-dom";
import LinkIcon from '@mui/icons-material/Link';
import 'react-tooltip/dist/react-tooltip.css'
import {Tooltip} from 'react-tooltip'
import {SliderVid} from "../Components/SliderVid.jsx";
import {SliderCast} from "../Components/SliderCast.jsx";
import {useContext, useEffect} from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {Context} from "../Contexts/ContextProvider.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";


export function Movie() {

    const {bookmarks, handleBookmarks, handleClose, open} = useContext(Context);
    const {movie, video, cast} = useLoaderData();

    useEffect(() => {

        handleClose()
    }, [movie]);


    return (
        <>
            <section className={"container flex flex-col items-center justify-evenly pt-[120px] mx-auto"}>
                <h1 className={"text-4xl mt-6"}>{movie.original_title}</h1>
                <h3 className={"text-2xl mt-1 mb-8"}>{movie.tagline}</h3>
                <div className="article flex flex-row">
                    <div className="details flex flex-col justify-center p-5 gap-3 w-8/12">
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
                            <ul className={"flex flex-row justify-center gap-5"}>
                                <li className={"hover:text-red-800"} data-tooltip-id="link-movie"
                                    data-tooltip-content="Official Website"
                                >
                                    <Link to={movie.homepage} target={"_blank"}>
                                        <LinkIcon/>
                                    </Link>
                                </li>
                                <li className={"hover:text-red-800 cursor-pointer"} data-tooltip-id="add-fav"
                                    data-tooltip-content={bookmarks.includes(movie.id) ? "Remove from favorites" : "Add to favorites"}
                                    onClick={() => handleBookmarks(movie.id)}>
                                    {bookmarks.includes(movie.id) ? <FavoriteIcon color={"success"}/> :
                                        <FavoriteBorderIcon/>}
                                </li>
                            </ul>
                        </div>

                        <h2 className={"text-3xl text-center mt-auto"}>Cast</h2>
                        <div className="cast container w-[90%] mx-auto mt-2 ">
                            <SliderCast cast={cast.cast}/>
                        </div>

                    </div>
                    <div className="poster w-4/12">
                        <img className={"w-full"}
                             src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://fakeimg.pl/500x800?text=${movie.original_title}&font=noto`}
                             alt="placehold"/>
                    </div>
                    <Tooltip id={"link-movie"}/>
                    <Tooltip id={"link-cast"}/>
                    <Tooltip id={"add-fav"}/>
                </div>

            </section>


            <section className={"trailers container mb-[25px] mt-16 mx-auto"}>
                <h2 className={"text-3xl text-center mb-2"}>Trailers</h2>
                <SliderVid videos={video.results}/>
            </section>
            <div>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={open}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </div>
        </>
    )
}

export const loadAll = async ({params}) => {
    const movie = await getMovie(params.id);
    const video = await getVideos(params.id)
    const cast = await getCast(params.id)
    return defer({movie, video, cast})
}
export const getMovie = async (id) => {
    return await myFetch('GET', `/movie/${id}`, {language: 'en-US'})
        .then(res => res)
}

export const getVideos = async (id) => {
    return await myFetch('GET', `/movie/${id}/videos`, {language: 'en-US'})
        .then(res => res)
}

export const getCast = async (id) => {
    return await myFetch('GET', `/movie/${id}/credits`, {language: 'en-US'})
        .then(res => res)
}