import { Link,useNavigate } from "react-router-dom";
import "./login.css"
import {useState,useEffect} from 'react';

const Login =()=>{
    useEffect(() => {
        if(localStorage.getItem("user")){
            navigate("/");
        }
    }, [])
    

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleLogin =async()=>{
        console.log(email, password);
        let user = await fetch(`http://localhost:8080/user/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"},
            body:JSON.stringify({email,password})
        })
        user = await user.json();
        if(user.name){
            localStorage.setItem("user",JSON.stringify(user));
            alert("Login Successfull");
            navigate("/");
        }
        else{
            alert("Invalid Credentials");
        }
    }

    return(
        <div className="login">
            <div className="login-container">
                <p style={{padding:"10px 0px 10px 0px"}}>Get Started with us</p>
                <div className="btn-container">
                    <button className="login-pg-btn">Login</button>
                    {/* <button className="login-pg-btn">Signup</button> */}
                </div>
                <div login-page-formcontainer>
                        <input type="email" placeholder="Enter Your Email" className="textinp" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <input type="password" placeholder="Enter Your Password" className="textinp" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <p style={{padding:"10px 0px 10px 0px"}}>Don't have account? {<Link to="/signup">Create One</Link>} </p>
                        <button className="login-btn" onClick={handleLogin}>PROCEED</button>
                </div>
            </div>
        </div>
    )
}
export default Login;