import React, { Fragment } from "react";

//Components Import Start
import ProductLinks from "../ProductLinks/ProductLinks";
import Discount from "../Main_Content/Discount";
import SideSplit from "../Reusable/SideSplit";
import Newsletter from "./Newsletter";
import Footer from "../Footer/Footer";
import Copyright from "../Main_Content/Copyright";
//Components Import End
import "../../static/css/Main_Content/Main_Content.css";



const Main_Content = () => {
    return (
        <Fragment>
            <ProductLinks />
            <Discount />
            <ProductLinks />
            <SideSplit />
            <Footer />
            <Copyright />
        </Fragment>
    );

}

export default Main_Content;