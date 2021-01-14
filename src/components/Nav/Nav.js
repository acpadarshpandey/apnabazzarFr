import React,{useState} from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../static/css/Header.css";
import g from '../..'


//Color has to be changed later

const Header = (props) => {
    const[isclick,setisclick]=useState(false)
      const handleclick=()=>{
          setisclick(!isclick)
      }
    return (
        <Navbar id="Navbar" className="navbar_main_container" bg="dark" expand="lg">
            <Navbar.Brand className="navLinks" href="/home">  Apna Bazzar  </Navbar.Brand>
            <Navbar.Toggle id="navbar_toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:"25px"}}>
                <Nav className="mr-auto">
                    <Nav.Link className="navLinks" href="/home"> Home </Nav.Link>
                    <Nav.Link className="navLinks" href="/products" > All Products </Nav.Link>
                    <Nav.Link className="navLinks" href="/products/coats"> Coats </Nav.Link>
                    <Nav.Link className="navLinks" href="/products/shirts"> T-Shirts </Nav.Link>
                    <Nav.Link className="navLinks" href="/products/shoes"> Shoes </Nav.Link>
                    <Nav.Link className="navLinks" href="/products/watches"> Watches </Nav.Link>
                    <Nav.Link className="navLinks" href="/shopping-cart" > My Cart </Nav.Link>
                    <Nav.Link className="navLinks" style={{marginLeft:"8rem"}} href="/login" ><button 
style={{ width:"8vw",borderRadius: "1rem",outline:"none"}}
                     onClick={handleclick}>{(!isclick)?"Login":"Logout"}</button> </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;