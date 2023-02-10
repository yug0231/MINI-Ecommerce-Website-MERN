import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from '../login/Login';

const AllRoutes =()=>{
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}
export default AllRoutes;