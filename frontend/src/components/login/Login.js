import { Link } from "react-router-dom";
import "./login.css"

const loginChng =()=>{
        var k = document.getElementById("login-page-formcontainer");
}

const Login =()=>{
    return(
        <div className="login">
            <div className="login-container">
                <p style={{padding:"10px 0px 10px 0px"}}>Get Started with us</p>
                <div className="btn-container">
                    <button className="login-pg-btn">Login</button>
                    {/* <button className="login-pg-btn">Signup</button> */}
                </div>
                <div login-page-formcontainer>
                    <form>
                        <input type="email" placeholder="Enter Your Email" className="textinp"/>
                        <input type="password" placeholder="Enter Your Password" className="textinp"/>
                        <p style={{padding:"10px 0px 10px 0px"}}>Don't have account? {<Link to="/signup">Create One</Link>} </p>
                        <button className="login-btn">PROCEED</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;