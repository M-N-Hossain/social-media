import React from "react";
import "./homePage.css"
import Feed from "../../Componet/feed/Feed";
import Rightbar from "../../Componet/rightbar/Rightbar";
import Topbar from "../../Componet/topbar/Topbar";
import Sidebar from "../../Componet/sidebar/Sidebar";

export default function HomePage(){
    return (
        <>
        <Topbar />
        <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
        </div>
        </>
    )
}