import {createContext, useEffect, useState} from "react";
import {myFetch} from "../Utilities/myFetch.js";
import {defer} from "react-router-dom";

export const Context = createContext();

export function ContextProvider(props) {
    const [bookmarks, setBookmarks] = useState([]);
    const [showBookmarkPanel, setShowBookmarkPanel] = useState(false);
    const [movies, setMovies] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleBookmarks = (id) => {
        setMovies([])
        if (!bookmarks.includes(id)) {

            setBookmarks(prev => [...prev, id])

        } else {
            let index = bookmarks.indexOf(id)

            setBookmarks((prev) => (
                prev.slice(0, index)
            ))
        }
        setShowBookmarkPanel(true)
    }

    const handlePanel = () => {

        if (showBookmarkPanel) {
            setShowBookmarkPanel(false)
        } else {
            setShowBookmarkPanel(true)
        }

    }

    const closePanel = () => {
        setShowBookmarkPanel(false)
    }

    const removeBookmark = (id) => {

        setBookmarks((prev) => (
            prev.filter(el => el !== id)
        ))
        setMovies([])
        setMovies((prev) => (
            prev.filter(el => el.id !== id)
        ))
    }

    useEffect(() => {
        bookmarks.map(el => {
            myFetch('GET', `/movie/${el}`).then(
                r => setMovies(prev => [...prev, r])
            )
        })

    }, [bookmarks]);
    return (
        <Context.Provider
            value={{
                bookmarks,
                handleBookmarks,
                showBookmarkPanel,
                handlePanel,
                closePanel,
                movies,
                removeBookmark,
                open,
                handleClose,
                handleOpen
            }}>
            {props.children}
        </Context.Provider>
    )

}