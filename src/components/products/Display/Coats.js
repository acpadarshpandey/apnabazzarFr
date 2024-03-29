import React, { Fragment, useEffect, useState } from "react";
import Nav from "../navbar/Nav";
import Header from "../../slideshow/Slideshow";
import Main_Nav from "../../Nav/Nav";
import "../../../static/css/Main_Content/Display.css";
import Card from "../../Reusable/Card";
import axios from "axios";
import Shuffle from "shuffle-array";


const Coat = () => {
    

    const [coats, setCoats] = useState([]);

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const styles = {
        mainContainer: {
            border: "solid blue",
            width: "100%",
            height: "100vh",
            
        },
        button: {

        }
    }

    useEffect(() => {
        axios.get("http://apnabazzar.herokuapp.com/api/products/coat")
        .then(res => {
            setCoats(Shuffle(res.data));
        })
    }, []);


    const handleClick = (id) => {
        let product_id = id;

        let url = `http://apnabazzar.herokuapp.com/api/add-to-cart/${product_id}`;
        
        axios.post(url)
        .then(res => {

            console.log(res);
            if(res.data === "Sorry you have already added this item to cart") {
                alert("Sorry you have already added this item to your cart");
            }
        })
    }


    return (
        <Fragment>
            <Main_Nav />
            <Header />
            <Nav />
            <div className="main_content_container">
                <div className="display_container">
                    {
                        coats.map((item, index) => {
                            return (
                                <Card  
                                    isAddedToCart={isAddedToCart} 
                                    onClick={handleClick.bind(this, item._id)}
                                    key={index} image={item.image} 
                                    productName={item.name} 
                                    price={item.price} 
                                />
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Coat;