import {React,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./paymentpage.css"
const Paymentpage=()=>{


    return <div>
        <div className="address">
            <div className="address-container">
                <p style={{padding:"10px 0px 10px 0px"}}>Enter Your Address</p>
                <div id="address-page-formcontainer">
                        <input type="text" placeholder="Enter Your Name" className="textinp" value="" />
                        <input type="email" placeholder="Enter Your Mobile Number" className="textinp" value="" />
                        <input type="password" placeholder="Enter Your Address" className="textinp" value=""/>
                        <input type="password" placeholder="Enter Your Pincode" className="textinp" value=""/>
                        <Link to="confirmation"><button className="address-btn" >Confirm Order</button></Link>
                </div>
            </div>
        </div>
    </div>
}

export default Paymentpage;