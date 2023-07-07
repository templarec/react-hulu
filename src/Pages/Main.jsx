import {MovieList} from "../Components/MovieList.jsx";
import {useEffect, useState} from "react";
import {myFetch} from "../Utilities/myFetch.js";
import {Link} from "react-router-dom";


export default function Main() {


    const [genres, setGenres] = useState();
    const [isSearch, setIsSearch] = useState(false);
    const [keywordSearch, setKeywordSearch] = useState();
    useEffect(() => {
        myFetch('GET', '/genre/movie/list')
            .then(response => {
                response.genres.map(g => {
                    g.endpoint = "/discover/movie";
                    g.params = {
                        with_genres: '' + g.id,
                        sort_by: 'popularity.desc'
                    }
                })
                setGenres(response.genres)
            })

    }, []);

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            setIsSearch(true)
            setKeywordSearch(event.target.value)
        }
    }


    return (
        <>
            <ul className="flex flex-wrap justify-center container mx-auto">
                {genres && genres.map((gen, i) => (

                    <li key={i} className="mr-3 mt-3">
                        <a className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-950 text-white hover:bg-blue-400"
                           href={`#${gen.name.toLowerCase()}`}>{gen.name}</a>
                    </li>
                ))}
            </ul>

            <div className="search-bar container mx-auto my-20">

                <input type="text" id="search-box"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search..."
                       onKeyDown={handleSearch}
                />


            </div>
            {!isSearch &&
                <MovieList id={"latest"} endpoint={"/movie/now_playing"} name={"In theaters"}/>
            }
            {(genres && !isSearch) &&
                genres.map((list, i) => (
                    <MovieList key={i} endpoint={list.endpoint} name={list.name} query={list.params}/>

                ))
            }
            {(isSearch && keywordSearch) &&
                //todo create new component for search results instead of MovieList
                <MovieList id={"search"} endpoint={"/search/movie"} name={`Search results for: ${keywordSearch}`}
                           query={{query: keywordSearch}}/>
            }
        </>

    )
}