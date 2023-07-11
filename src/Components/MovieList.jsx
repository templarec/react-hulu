import {myFetch} from "../Utilities/myFetch.js";
import {MovieCard} from "./MovieCard.jsx";
import {useEffect, useState} from "react";
import Slider from 'react-slick';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {SearchCard} from "./SearchCard.jsx";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link} from "react-router-dom";
import {Skeleton} from "@mui/material";

export function MovieList({endpoint, name, query, search = false, genreid}) {
    const [movies, setMovies] = useState();

    useEffect(() => {
        myFetch('GET', endpoint, query)
            .then(response => setMovies(response))
    }, [endpoint, name, query, search]);

    const NextArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div className={"flex justify-center"} onClick={onClick}>
                <span className={"cursor-pointer hover:text-red-800"}><KeyboardArrowDownIcon
                    sx={{fontSize: 60}}/></span>
            </div>

        )
    }
    const PrevArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div className={"flex relative justify-center"} onClick={onClick}>
                <span
                    className={"cursor-pointer absolute transform translate-y-1/4 bottom-0 hover:text-red-800"}><KeyboardArrowUpIcon
                    sx={{fontSize: 60}}/></span>
            </div>

        )
    }

    let settings = {
        dots: false,
        infinite: !search,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: search ? 1 : 4,
        vertical: search,
        verticalSwiping: search,
        nextArrow: search ? <NextArrow/> : null,
        prevArrow: search ? <PrevArrow/> : null,
        responsive: !search ? [
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

        ] : []
    };
    return (
        <>
            <div id={name.toLowerCase()} className={"container mx-auto mt-[50px]"}>
                <div className={"flex flex-row justify-between "}>
                    {genreid && <h3 className={"text-3xl mb-2 pl-4 underline"}>
                        <Link to={`/genre/${genreid}`}>
                            {name}
                        </Link>
                    </h3>}
                    {!genreid && <h3 className={"text-3xl mb-2 pl-4 "}>
                        {name}
                    </h3>}
                    {!search && <a href="#" className={" hover:text-red-500 "}>
                        <KeyboardDoubleArrowUpIcon sx={{fontSize: 30}}/>
                    </a>}
                </div>
                {!search &&
                    <Slider {...settings}>
                        {movies ? movies.results.map((el) => (
                                <MovieCard key={el.id} data={el}/>
                            )) :
                            <>
                                <Skeleton variant={"rectangular"} width={1200} height={400}
                                          sx={{bgcolor: 'slate.400'}}/>
                                <Skeleton variant={"rectangular"} width={1200} height={400}
                                          sx={{bgcolor: 'slate.400'}}/>
                                <Skeleton variant={"rectangular"} width={1200} height={400}
                                          sx={{bgcolor: 'slate.400'}}/>
                                <Skeleton variant={"rectangular"} width={1200} height={400}
                                          sx={{bgcolor: 'slate.400'}}/>
                            </>

                        }
                    </Slider>
                }
                {search &&
                    <Slider {...settings}>
                        {movies && movies.results.map((el) => (
                            <SearchCard key={el.id} data={el}/>
                        ))}
                    </Slider>
                }

            </div>
        </>
    )
}