import {Outlet} from "react-router-dom";
import {Header} from "../Components/Header.jsx";
import {useState} from "react";


export default function Root() {


    return (
        <>
            <Header/>
            <Outlet/>
        </>);
}