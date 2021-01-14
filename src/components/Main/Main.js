import React, { useEffect } from "react";
import Nav from "../Nav/Nav";
import Header from "../slideshow/Slideshow";
import Main_Content from "../Main_Content/Main_Content";
//Axios
import axios from "axios";
import { Redirect } from "react-router-dom";


const Main = () => {



    useEffect(() => {
        axios.get("http://apnabazzar.herokuapp.com/api/status")
        .then(res => {
            console.log(res);
            if(res.data.status === "not verified") {
               < Redirect to="/login"/>
            }
        })
    }, [])

    return (
        <div>
            <Nav  />
            <Header />
            <Main_Content />
        </div>
    );
}

export default Main;