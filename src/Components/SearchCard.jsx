import {Link} from "react-router-dom";

export function SearchCard({data}) {
    return (
        <>
            <Link to={"/movie/" + data.id}>
                <div className="flex flex-row justify-between overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white search-card my-2
                max-h-[200px]">
                    <div
                        className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-l from-black via-gray-900 to-transparent"></div>
                    <div className="grid grid-cols-3 cursor-pointer group z-10 movie_info">
                        <img className="object-contain md:object-cover h-full w-full"
                             src={data.backdrop_path ? `https://image.tmdb.org/t/p/w500/${data.backdrop_path}` : 'https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png'}
                             style={{filter: "grayscale(0)"}} alt={data.original_title + " poster"}/>
                        <div className="movie-desc flex flex-col h-full p-4">
                            <h2 className={"text-3xl"}>{data.original_title}</h2>
                            <p className={"overflow-hidden truncate w-95 my-2"}>{data.overview}</p>
                            <ul className={"text-sm"}>
                                <li>Popularity: {data.popularity}</li>
                                <li>Release date: {data.release_date}</li>
                                <li>Rating: {data.vote_average}</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </Link>
        </>
    )
}