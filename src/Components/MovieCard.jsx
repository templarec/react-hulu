// eslint-disable-next-line react/prop-types
import {useEffect, useState} from "react";;
import {Link} from "react-router-dom";

export function MovieCard({ data }) {


    return (
        <>
            <Link to={"/movie/" + data.id}>
                <div className="flex flex-col  justify-between overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card mx-2
                min-h-[400px]">
                    <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
                    <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info">
                        <div className="poster__info align-self-end w-full">
                            <div className="h-32"></div>
                            <div className="space-y-6 detail_info">
                                <div className="flex flex-col space-y-2 inner">
                                    <h3 className="text-2xl font-bold text-white" >{data.original_title}</h3>
                                </div>
                                <div className="flex flex-row justify-between datos">
                                    <div className="flex flex-col datos_col">
                                        <div className="text-sm text-gray-400">Popularity:</div>
                                        <div className="popularity">{data.popularity}</div>

                                    </div>
                                    <div className="flex flex-col datos_col">
                                        <div className="text-sm text-gray-400">Release date:</div>
                                        <div className="release">{data.release_date}</div>

                                    </div>
                                    <div className="flex flex-col datos_col">
                                        <div className="text-sm text-gray-400">Rating:</div>
                                        <div className="release">{data.vote_average}</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="absolute inset-0 transform w-full -translate-y-4" src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}
                         style={{filter: "grayscale(0)"}} alt={data.original_title + " poster"}/>
                </div>
            </Link>

        </>
    )
}