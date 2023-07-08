import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import {useEffect, useState} from "react";
import {Tooltip} from "react-tooltip";

export function SliderVid({videos}) {

    let settings = {
        dots: false,
        infinite: false,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <>
            <Slider {...settings}>
                {/* eslint-disable-next-line react/prop-types */}
                    {videos && videos.filter(el => el.official && (el.type === 'Trailer' || el.type === 'Teaser' || el.type === 'Clip') ).map((el, i) => (
                        <div key={i} className={"px-2"}  >
                            <LiteYouTubeEmbed id={el.key}  title={el.name} />
                            <p className={"text-center"}>{el.name}</p>
                        </div>

                    ))}


            </Slider>


        </>
    )
}