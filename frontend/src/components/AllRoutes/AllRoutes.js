import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from '../login/Login';
import Signup from '../signup/signup';
import PrivateComponent from './PrivateComponent';
import Homepage from '../homepage/Homepage';
import Confirmation from '../confirmationpage/confirmation';
import Paymentpage from '../paymentPage/paymentpage';
import Cart from '../cart/cart';
const AllRoutes =()=>{

    return(
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route element={<PrivateComponent/>}>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/cart/payment' element={<Paymentpage/>}></Route>
                <Route path='/cart/payment/confirmation' element={<Confirmation/>}></Route>
            </Route>
        </Routes>
    )
}
export default AllRoutes;