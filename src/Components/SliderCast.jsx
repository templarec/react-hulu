import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


export function SliderCast({cast}) {

    let settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 5,
    };

    return (
        <>
            <Slider {...settings}>
                {/* eslint-disable-next-line react/prop-types */}
                {cast && cast.map((el, i) => (
                    <div key={i} className={"px-2"}>
                        <img className={"h-[80px]"}
                             src={el.profile_path ? `https://image.tmdb.org/t/p/w500/${el.profile_path}` : `https://fakeimg.pl/50x80?text=${el.name}`}
                             alt={el.name}/>
                    </div>
                ))}
            </Slider>


        </>
    )
}