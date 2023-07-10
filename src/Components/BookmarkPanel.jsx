import {Context} from "../Contexts/ContextProvider.jsx";
import {useContext, useEffect, useState} from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export function BookmarkPanel() {
    const {showBookmarkPanel, handlePanel, movies, removeBookmark} = useContext(Context);


    return (
        <>
            <div
                className={"bk-panel fixed text-black flex flex-col right-1 top-0 w-1/3 h-1/4 bg-gray-400 rounded p-3 transition-all duration-200 " + (!showBookmarkPanel ? " -top-[22%] " : " ")}>
                {!showBookmarkPanel && <div className="open absolute bottom-0 right-[50%] cursor-pointer"
                                            onClick={handlePanel}>
                    <KeyboardArrowDownIcon sx={{fontSize: 30}}/>
                </div>}
                {showBookmarkPanel &&
                    <div className="open absolute right-0 top-2  cursor-pointer" onClick={handlePanel}>
                        <CloseIcon sx={{fontSize: 30}}/>
                    </div>}
                <div className="">
                    <ul className={"overflow-auto"}>
                        {movies && movies.map((el, i) => (
                            <li key={i}>
                                <Link to={`/movie/${el.id}`} className={"underline hover:text-red-800 mb-2"}
                                      onClick={handlePanel}>
                                    {el.original_title}
                                </Link>
                                <span onClick={() => removeBookmark(el.id)}>
								<CloseIcon className={"cursor-pointer"}/>
							</span>

                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bbottom-panle flex absolute bottom-0 w-1/3 justify-between left-3 pb-1">
                    <h3>Favorites</h3>
                    {(movies && movies.length > 0) && <Link to={'/bookmarks'}>
                        <PictureAsPdfIcon/>
                    </Link>}
                </div>


            </div>
        </>
    )
}