import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from "./components/login_page/create-an-account/Create";
import Main from "././components/Main/Main";
import Product from "./components/products/Products";
import ManageAccount from "./components/Manage_Account/Manage_Account";
import Cart from "./components/shopping_cart/Cart";
import Admin from "./components/Admin/Admin";
import Admin_login from "./components/Admin/Admin";
import AdminUsers from "./components/Admin/AdminUsers";
import AdminProducts from "./components/Admin/AdminProducts";
import AdminOrders from "./components/Admin/AdminOrders";
import AddProduct from "./components/Admin/AddProduct";
import Shirts from "./components/products/Display/Shirts";
import Coats from "./components/products/Display/Coats";
import Watches from "./components/products/Display/Watches";
import Shoes from "./components/products/Display/Shoes";
/*COMPONENT IMPORT END */
//React Components Start

import Login_Page from "./components/login_page/Login";


//React Components End


function App() {


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/admin/add-product" >
            <AddProduct />
          </Route>
          <Route path="/admin/orders" >
            <AdminOrders />
          </Route>
        <Route path="/admin/products" >
          <AdminProducts />
        </Route>
        <Route path="/admin/users" >
            <AdminUsers />
          </Route>
          <Route path="/admin" >
            <Admin />
          </Route>
          <Route path="/admin-login" >
            <Admin_login />
          </Route>
          <Route path="/manage-account" >
            <ManageAccount />
          </Route>
          <Route path="/shopping-cart" >
              <Cart />
          </Route>
          <Route path="/products/shirts" >
              <Shirts />
          </Route>
          <Route path="/products/watches" > 
              <Watches />
          </Route>  
          <Route path="/products/coats" > 
              <Coats />
          </Route>
          <Route path="/products/shoes">
            <Shoes />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/login">  <Login_Page /> </Route>
          <Route path="/create-an-account"> <Create /> </Route>
          <Route path="/">
            <Main />
          </Route>




        </Switch>

        
      </div>
    </Router>
  );
}

export default App;

