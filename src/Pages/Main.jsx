import {MovieList} from "../Components/MovieList.jsx";
import {useEffect, useState} from "react";
import {myFetch} from "../Utilities/myFetch.js";
import {Link} from "react-router-dom";



export default function Main() {


	const [genres, setGenres] = useState();

	useEffect(() => {
		myFetch('GET', '/genre/movie/list')
			.then(response => {
				response.genres.map( g => {
					g.endpoint = "/discover/movie";
					g.params = {
						with_genres: ''+g.id,
						sort_by: 'popularity.desc'
					}
				})
				setGenres(response.genres)
			})

	}, []);


	return (
		<>

			<ul className="flex flex-wrap justify-center container mx-auto">
				{genres && genres.map((gen,i) => (

					<li key={i} className="mr-3 mt-3">
					<a className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-950 text-white"
					href={`#${gen.name.toLowerCase()}`}>{gen.name}</a>
					</li>
				))}

			</ul>

			<MovieList id={"latest"} endpoint={"/movie/now_playing"} name={"In theaters"} />
			{genres &&
				genres.map((list, i) => (
						<MovieList key={i} endpoint={list.endpoint} name={list.name} query={list.params} />

				))
			}
		</>

	)
}