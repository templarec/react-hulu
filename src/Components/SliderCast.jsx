import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import {Link} from "react-router-dom";
import {Tooltip} from "react-tooltip";
import {Context} from "../Contexts/ContextProvider.jsx";
import {useContext} from "react";


export function SliderCast({cast}) {
	const {handleOpen} = useContext(Context);
	let settings = {
		dots: false,
		infinite: false,
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
					<div key={i} className={"relative mx-2"} data-tooltip-id={el.id}
						 data-tooltip-content={`${el.name} (${el.character})`} onClick={handleOpen}>
						<Link to={`/actor/${el.id}`}>
							<img className={"h-[10%] max-h-[130px] cursor-pointer "}
								 src={el.profile_path ? `https://image.tmdb.org/t/p/w500/${el.profile_path}` : `https://fakeimg.pl/400x600?text=n/a`}
								 alt={el.name}/>
						</Link>
					</div>
				))}
			</Slider>
			{cast && cast.map((el, id) => (
				<Tooltip key={id} id={el.id}/>
			))}

		</>
    )
}