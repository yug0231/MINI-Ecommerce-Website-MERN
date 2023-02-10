import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import "./signup.css"




const Signup =()=>{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate =useNavigate();

    useEffect(() => {
        if(localStorage.getItem("user")){
            navigate("/");
        }
    }, [])
    


    const handleSignup=()=>{
        console.log(name,email,password);
        fetch("http://localhost:8080/user/signup/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        }).then((res)=>res.json())
        .then((data)=>localStorage.setItem("user",JSON.stringify(data),alert("signupSuccesfull"), navigate("/login")));
    }


    return(
        <div className="signup">
            <div className="signup-container">
                <p style={{padding:"10px 0px 10px 0px"}}>Get Started with us</p>
                <div className="btn-container">
                    <button className="signup-pg-btn">Sign Up</button>
                </div>
                <div id="signup-page-formcontainer">
                        <input type="text" placeholder="Enter Your Name" className="textinp" value={name} onChange={(e)=>setName(e.target.value)}/>
                        <input type="email" placeholder="Enter Your Email" className="textinp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" placeholder="Enter Your Password" className="textinp" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <p style={{padding:"10px 0px 10px 0px"}}>Already have account? {<Link to="/login">Login</Link>} </p>
                        <button className="signup-btn" onClick={handleSignup}>PROCEED</button>
                </div>
            </div>
        </div>
    )
}
export default Signup;