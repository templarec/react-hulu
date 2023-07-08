import Slider from 'react-slick';
import {Link} from "react-router-dom";
import {Tooltip} from "react-tooltip";

export function SliderMovies({movies}) {
    const numImagesSlider = 8;

    let settings = {
        dots: false,
        infinite: (movies.length >= numImagesSlider),
        lazyLoad: true,
        speed: 500,
        slidesToShow: numImagesSlider,
        slidesToScroll: numImagesSlider,
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

    return (
        <>
            <Slider {...settings}>
                {movies && movies.map((el, i) => (
                    <Link key={i} to={`/movie/${el.id}`}>
                        <div className={"actor-movie-card"}
                             data-tooltip-id={el.id}
                             data-tooltip-content={el.original_title}>
                            <img className={"pr-2"}
                                 src={el.poster_path ? `https://image.tmdb.org/t/p/w185${el.poster_path}` : `https://fakeimg.pl/185x280?text=${el.id}&font=noto`}
                                 alt=""/>
                        </div>
                    </Link>
                ))}
            </Slider>
            {movies && movies.map((el, id) => (
                <Tooltip key={id} id={el.id}/>
            ))}
        </>
    )
}