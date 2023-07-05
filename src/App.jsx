import './App.css'
import { createBrowserRouter,  RouterProvider} from "react-router-dom";
import Main from "./Pages/Main.jsx";

import {loadAll, Movie} from "./Pages/Movie.jsx";
import Root from "./Pages/Root.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/movie/:id",
                element: <Movie />,
                loader: loadAll,
            },
        ],
    },
]);
function App() {

    return <RouterProvider router={router} />;
}

export default App
