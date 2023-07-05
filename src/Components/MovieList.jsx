import {myFetch} from "../Utilities/myFetch.js";
import {MovieCard} from "./MovieCard.jsx";
import {useEffect, useState} from "react";
import Slider from 'react-slick';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export function MovieList({endpoint, name, query}) {
    const [movies, setMovies] = useState();
    useEffect(() => {
        myFetch('GET', endpoint, query)
            .then(response => setMovies(response))
    }, []);

    let settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1095,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 842,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    };
    console.log(movies)
    return (
        <>
            <div id={name.toLowerCase()} className={"container relative mx-auto mt-[50px]"}>
                <h3 className={"text-3xl mb-2 pl-4"}>{name}</h3>
                <a href="#" className={"text-center w-full underline mt-2 hover:text-red-500 absolute right-0 top-0"}>
                    <KeyboardDoubleArrowUpIcon sx={{fontSize: 30}}/>
                </a>
                <Slider {...settings}>
                    {movies && movies.results.map((el) => (
                        <MovieCard key={el.id} data={el}/>
                    ))}
                </Slider>

            </div>
        </>
    )
}