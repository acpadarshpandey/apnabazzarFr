import React, {useEffect} from "react";
import "../../static/css/admin/MainContent.css";
import axios from "axios";
const MainContent = () => {

    useEffect(() => {
        axios.get("http://apnabazzar.herokuapp.com/api/status")
        .then(res => {
            if(res.data.status === "not verified") {
                window.location.href = "/login";
            }
        })
    }, [])


    return (
        <div className="main_admin_content_container">
         Hello !!
        </div>
    )
}

export default MainContent;