import {myFetch} from "../Utilities/myFetch.js";
import {defer, Link, useLoaderData, useParams} from "react-router-dom";
import {SearchCard} from "../Components/SearchCard.jsx";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useEffect, useRef, useState} from "react";

export function Genre() {
	const [genre, setGenre] = useState();
	const [movies, setMovies] = useState();
	const params = useParams();
	const [page, setPage] = useState(1);
	const handlePageNext = () => {
		const totalpages = movies && movies.total_pages;
		if (page <= totalpages) {
			setPage(prevState => prevState + 1)
		}
	}
	const handlePagePrev = () => {
		if (page > 1) {
			setPage(prevState => prevState - 1)
		}
	}

	useEffect(() => {
		myFetch('GET', '/genre/movie/list')
			.then(res => setGenre(res.genres.filter(g => g.id === +params.id)))
	}, [params.id]);


	useEffect(() => {
		myFetch('GET', '/discover/movie', {
			language: 'en-US', with_genres: '' + params.id,
			sort_by: 'popularity.desc', page: page
		})
			.then(res => setMovies(res))
	}, [params.id, page]);
	console.log(movies)

	return (
		<>
			<div className="container pt-[120px] mx-auto">
				<div className={"w-full flex items-center justify-between gap-4"}>
					{genre && <span className={"text-4xl"}>{genre[0].name}</span>}
					<div className="navig">
				<span className={"cursor-pointer " + (page <= 1 ? 'text-slate-500' : '')}
					  onClick={page >= 1 ? handlePagePrev : null}>
						<ArrowBackIosIcon/>
					</span>
						<span><input
							className={"pl-2 text-green-400 bg-slate-900 outline-1 outline-green-400 mr-1 w-3/12"}
							type="number" value={page}
							onChange={(e) => setPage(e.target.value)}/>/ {movies ? movies.total_pages : ' n/a'}</span>
						<span className={"cursor-pointer"} onClick={handlePageNext}>
						<ArrowForwardIosIcon/>
					</span>

					</div>
				</div>

				{movies && movies.results.map(mov => (
					<SearchCard key={mov.id} data={mov}></SearchCard>
				))}

			</div>

		</>
	)
}
