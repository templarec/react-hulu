import {MovieList} from "../Components/MovieList.jsx";
import {useEffect, useRef, useState, useContext} from "react";
import {myFetch} from "../Utilities/myFetch.js";
import {Link} from "react-router-dom";
import {Context} from "../Contexts/ContextProvider.jsx";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export default function Main() {


    const [genres, setGenres] = useState();
    const [isSearch, setIsSearch] = useState(false);
    const [keywordSearch, setKeywordSearch] = useState();
    const inputSearch = useRef('');
    const {open, handleOpen, handleClose} = useContext(Context);

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
        handleClose();

    }, []);

    const handleSearch = (event) => {
        setIsSearch(false)
        if (event.key === 'Enter') {
            setIsSearch(true)
            setKeywordSearch(event.target.value)
        } else if (event.type === 'click') {
            setIsSearch(true)
            setKeywordSearch(inputSearch.current.value)
        }
    }

    return (
        <>
            <div className="search-bar container w-9/12 mx-auto flex pt-[120px] my-20">
                <input ref={inputSearch} type="text" id="search-box"
                       className="bg-teal-50 border border-teal-200 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search..."
                       onKeyDown={handleSearch}
                />
                <button
                    className={"inline-block rounded py-1 px-3 bg-green-400 text-black hover:bg-green-600 m-2"}
                    onClick={handleSearch}>Search
                </button>
            </div>

            {!isSearch &&
                <MovieList id={"latest"} endpoint={"/movie/now_playing"} name={"In theaters"}/>
            }
            {(genres && !isSearch) &&
                genres.map((list, i) => (
                    <MovieList key={i} endpoint={list.endpoint} name={list.name} query={list.params} genreid={list.id}/>
                ))
            }
            {(isSearch && keywordSearch) &&
                <MovieList id={"search"} endpoint={"/search/movie"} name={`Search results for: ${keywordSearch}`}
                           query={{query: keywordSearch}} search={true}/>
            }
            <div>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={open}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </div>
        </>

    )
}