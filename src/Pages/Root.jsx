import {Outlet} from "react-router-dom";
import {Header} from "../Components/Header.jsx";
import {useState} from "react";
import {BookmarkPanel} from "../Components/BookmarkPanel.jsx";


export default function Root() {


    return (
        <>
            <Header/>
            <BookmarkPanel/>
            <Outlet/>
        </>);
}