import React from "react";
import { Link } from "react-router-dom";
import ("./navbar.css")
const Navbar =()=>{


    return <div id="navbar">
        <div className="navbar-container">
        <div>
            <h3>E-Commerce</h3>
        </div>
        <div className="nav-right">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/login">Login</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/signup">Signup</Link>
        </div>
        </div>
    </div>
}

export default Navbar;