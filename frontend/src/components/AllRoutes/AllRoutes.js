import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from '../login/Login';
import Signup from '../signup/signup';
const AllRoutes =()=>{
    const navigate = useNavigate();
    const logoutFn = ()=>{
        let user = "";
        localStorage.setItem('user',user);
        navigate("/")
    }
    return(
        <Routes>
            <Route path="/logout" element={logoutFn}></Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>

        </Routes>
    )
}
export default AllRoutes;