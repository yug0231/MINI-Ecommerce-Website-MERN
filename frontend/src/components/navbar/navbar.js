import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ("./navbar.css")
const Navbar =()=>{
    let navigate = useNavigate();
    let auth=JSON.parse(localStorage.getItem("user"));
    const Logout =()=>{
        localStorage.clear();
        navigate("/");
        auth=localStorage.getItem("user");
    }
    return <div id="navbar">
        <div className="navbar-container">
        <div>
            <h3>E-Commerce</h3>
        </div>
        {auth?<div className="nav-right">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link onClick={Logout}>Logout({auth.name})</Link>
        </div>:
        <div className="nav-right">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
        }
        </div>
    </div>
}

export default Navbar;


// <Link to="/">Home</Link>
//             <Link to="/cart">Cart</Link>
//             <Link to="/login">Login</Link>
//             <Link onClick={Logout}>Logout</Link>
//             <Link to="/signup">Signup</Link>