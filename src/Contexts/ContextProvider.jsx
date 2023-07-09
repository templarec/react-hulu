import {createContext, useState} from "react";

export const Context = createContext();

export function ContextProvider(props) {
    const [bookmarks, setBookmarks] = useState([]);

    const handleBookmarks = (id) => {

        if (!bookmarks.includes(id)) {
            setBookmarks(prev => [...prev, id])
        } else {
            let index = bookmarks.indexOf(id)

            setBookmarks((prev) => (
                prev.slice(0, index)
            ))

        }


    }

    return (
        <Context.Provider value={{bookmarks, handleBookmarks}}>
            {props.children}
        </Context.Provider>
    )

}