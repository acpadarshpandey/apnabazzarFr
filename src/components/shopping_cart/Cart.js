import React, { Fragment, useState, useEffect} from "react";
import "../../static/css/Shopping_cart/Cart.css";
import FinalCart from "./FinalCart";
import Nav from "../Nav/Nav";
import CartItem from "./CartItem";
import PayPal from "./PayPal";
import { Modal, Button } from "react-bootstrap";

import nodemailer from "nodemailer";


import axios from "axios";

const Cart = () => {


    const [userQuantity, setUserQuantity] = useState();

    const [addedDiscount, setAddedDiscount] = useState(false);

   
    const getFinalPrice = (qty, cart_id) => {
        setCartId(cart_id);
        setUserQuantity(qty);
    }

    const [cartId, setCartId] = useState([]);


    let new_checkout_price = 0;
    let complete_final_price = [];

    
    const [newCheckoutPrice, setNewCheckoutPrice] = useState(0);
   
    const updateFinalPriceFromDatabase = (finalPrice) => {

        console.log(finalPrice);

        axios.post(`http://apnabazzar.herokuapp.com/api/changeFinalPrice/${finalPrice}`)
        .then(res => {
            setNewCheckoutPrice(res.data.finalPrice);
            console.log(newCheckoutPrice);
        })
    }
 
    


    let item_ids = [];

    const [userEmail, setUserEmail] = useState("");

    const [showDiscountModal, setShowDiscountModal] = useState(false);

    const [showDiscountErrorModal, setShowDiscountErrorModal] = useState(false);

    const [discountState, setDiscountState] = useState();

    const [showModal, setShowModal] = useState(false);

    const [showErrorModal, setShowErrorModal] = useState(false)

    const [hasCart, setHasCart] = useState(true);

    const [cartItems, setCartItems] = useState([]);



    const callback = (stat) => {
        if(stat) {
            setShowModal(true);
        } else {
            setShowErrorModal(true);
        }
    }

    

    useEffect(() => {    
        axios.get("http://apnabazzar.herokuapp.com/api/shopping-cart/all-items")
        .then(res => {
            setCartItems(res.data);
            res.data.map((item) => {
                
               
            })
            setHasCart(true);
            if(res.data.length === 0) {
                setHasCart(false);          
            }
        });

        axios.get("http://apnabazzar.herokuapp.com/api/status")
        .then(res => {
            setUserEmail(res.data.email);
        })

    }, []);
    

  

    const handleDiscountClick = () => {
        setShowDiscountModal(true);
    }

   
    const handleDiscountChange = (e) => {
        setDiscountState(e.target.value);
        console.log(discountState);
    }

    
    const handleClick = (id) => {
        let item_id = id;
        let url = `http://apnabazzar.herokuapp.com/api/shopping-cart/delete-item/${item_id}`;
        axios.post(url)
        .then(res => {
            if(res.data === "item deleted") {
                window.location.reload();
            }
        })
    }


    const handleDiscountSubmit = () => {
        if(addedDiscount) {
            setShowDiscountModal(false);
            setShowDiscountErrorModal(true);
        }
        if(discountState === "50OFF") {
            setAddedDiscount(true);
            setShowDiscountModal(false);
           
        }
    }


    const handleChange = (id,index, e) => {
        
        let array_index = index;
        let product_id = id;
        console.log(id);
        let qty = e.target.value;



    }



   const handleModalClose = () => {
    setShowModal(false);
    axios.post("http://apnabazzar.herokuapp.com/api/eraseCart")
    .then(res => {
        console.log(res);
    })

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "devreact2021@gmail.com",
            pass: "Papa@12345"
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    let message = {
        from: "devreact2021@gmail.com",
        to: userEmail,
        subject: "Order Confirmation",
        text: "Hello, This is just a message confirming your order with Apna Bazzar. Please note this is not an actual order confirmation, but just a demonstration",
        html: "<p>Hello, This is just a message confirming your order with Hassons. Please note this is not an actual order confirmation, but just a demonstration </p>"
      };

    transporter.sendMail(message);

    window.location.href="/";
    
}




 

    if(hasCart) {
        return (
            <Fragment>
       
            {/* Discount Modal */}

        <Modal show={showDiscountModal} onHide={() => setShowDiscountModal(false)}>
        <Modal.Header closeButton>
        <Modal.Title>Enter your discount code</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:"center"}} > <input placeholder="Enter Code" onChange={handleDiscountChange} />  </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={() => setShowDiscountModal(false)}>
        Close
        </Button>
        <Button variant="secondary" onClick={handleDiscountSubmit}>
        Submit
        </Button>
        </Modal.Footer>
        </Modal>

        {/* DISCOUNT ERROR MODAL */}

        <Modal show={showDiscountErrorModal} onHide={() => setShowDiscountErrorModal(false)}>
        <Modal.Header closeButton>
        <Modal.Title>You have already used this code!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
        <Button variant="danger" onClick={() => setShowDiscountErrorModal(false)}>
        Close
        </Button>

        </Modal.Footer>
        </Modal>

            {/* Approval Modal */}
       <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your payment has been successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please note that this is only a sandbox paypal account for development purposes. This is not a real ecommerce store. Thank you I hope you enjoyed!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


            {/* Payment Error Modal */}
        <Modal show={showErrorModal} onHide={() => {setShowErrorModal(false)}}>
    <Modal.Header closeButton>
        <Modal.Title>There has been an error with your payment please try again</Modal.Title>
    </Modal.Header>
    <Modal.Body>Please note that this is only a sandbox paypal account for development purposes. This is not a real ecommerce store. Thank you I hope you enjoyed!</Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={() => {setShowErrorModal(false)}}>
        Close
        </Button>
    </Modal.Footer>
    </Modal>
            <Nav />
            <marquee>                <p> Please note that this is not a real eCommerce store this is a demonstration for development purposes. I hope you enjoyed this application! </p> </marquee>
           <div className="shopping_cart_main_container">

               <div className="shopping_cart_part_one">
                   
                   <div className="shopping_cart_info_part1_container">
                        <h1> Your Shopping Cart </h1>
  
                    {
                        cartItems.map((item, index) => {
                            
                            // let background = require(`../../static/images/clothes/${item.image}`);
                            return (
                                <CartItem 
                                grabPrice={getFinalPrice}
                                id={item._id}
                                onChange={handleChange.bind(this, item._id, index)}
                                
                                title={item.name}
                                price={item.price}
                                onClick={handleClick}
                                
                                />
                            )
                        })
                    }
                   </div>
               </div>
               <div className="shopping_cart_part_two">
                    <div className="shopping_cart_part_two_inner">
                        <h3> Final Order </h3>
                        <hr />
                        <div className="item_loop">
                        {
                            cartItems.map((item, index) => {
                                index = item._id;
                                let updated_price;
                                item_ids.push(item._id);

                                if(index === cartId) {
                                    updated_price = item.price * userQuantity;
                                    
                                } else {
                                    updated_price = item.price;
                                    
                                }

                                new_checkout_price += updated_price;
                                
                                
                                

                                // complete_final_price.push(updated_price);

                                // getReducedValue();
                                // console.log(getReducedValue());
                                return (
                                    <FinalCart name={item.name} price={updated_price} />
                                )
                            })
                        }
                        

                      

                        </div>
                        

                        {/* <FinalCart price={updatedPrice} /> */}
                        <div  className="price_total_container">
                            <div className="price_div">
                                <p> TOTAL: </p>
                                <p> ${addedDiscount ? ( new_checkout_price*=0.5 ) : (new_checkout_price) } </p>
                              
                            </div>
                            <div onMouseEnter={() => updateFinalPriceFromDatabase(new_checkout_price)} style={{flexDirection: "column"}} className="paypal_container">
                                <p > <a onClick={handleDiscountClick} href="#"> Got a discount code? </a> </p>
                                <PayPal amount={newCheckoutPrice} callback={callback} />
                            </div>
                        </div>
                    </div>
               </div>
           </div>
           
            </Fragment>
        )
    } else {
        return (
            <div style={{flexDirection: "column"}} className="cart_main_container">
                <h1> Sorry you have no cart items</h1>
                <a href="/products"> Click here to get shopping! </a>
            </div>
        )
    }

  
}


export default Cart;