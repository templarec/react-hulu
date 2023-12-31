import './App.css'
import { createBrowserRouter,  RouterProvider} from "react-router-dom";
import Main from "./Pages/Main.jsx";
import {loadAll, Movie} from "./Pages/Movie.jsx";
import Root from "./Pages/Root.jsx";
import {Actor, loadActor} from "./Pages/Actor.jsx";
import {Bookmarks} from "./Pages/Bookmarks.jsx";
import {ContextProvider} from "./Contexts/ContextProvider.jsx";
import {Genre} from "./Pages/Genre.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Main/>,
            },
            {
                path: "/movie/:id",
                element: <Movie/>,
                loader: loadAll,
            },
            {
                path: "/actor/:id",
                element: <Actor/>,
                loader: loadActor,
            },
            {
                path: "/bookmarks/",
                element: <Bookmarks/>
            },
            {
                path: "/genre/:id",
                element: <Genre/>
            },
        ],
    },
]);
function App() {

    return <ContextProvider><RouterProvider router={router}/></ContextProvider>


}

export default App
