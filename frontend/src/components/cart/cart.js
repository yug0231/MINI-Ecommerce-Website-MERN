import {useState,useEffect} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import ('./cart.css')
const Cart=()=>{
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));

    var inicartTotal=0;
    var [cartTotal,setcartTotal]=useState(0);
    useEffect(()=>{
        getData();
        calculateTotal();
    },[])
    const getData =async(res,req)=>{
        let data = await fetch(`http://localhost:8080/user/getuser`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                _id : user._id
              })
        })
        data= await data.json();
        setUser(data);
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
    }

    const calculateTotal=()=>{
        inicartTotal=0;
        user.cart.map((ele,index)=>{
            inicartTotal=inicartTotal+ele[0].ele.price *ele[1];
        })
        console.log(inicartTotal);
        setcartTotal(inicartTotal);
    }


return <div>
    <h1>Cart</h1>
    {   
        user.cart.map((ele,index)=>{
            {/* inicartTotal=inicartTotal+ele[0].ele.price *ele[1] ;
            console.log(inicartTotal); */}
            return <div key={index} className="cart-box">
            <img src={ele[0].ele.image} alt=""/>
            <h2>{ele[0].ele.title}</h2>
            <span style={{margin:"auto", textAlign:"center"}}><h3>Price</h3><br></br><h2>₹{ele[0].ele.price}</h2></span>
            <h2>Quantity<br></br><input type="number" min="1" defaultValue={1} className='qty-box' onChange={(e)=>{
                if (e.target.value < 1) {e.target.value = 1;} // minimum is 1
                else {e.target.value = Math.floor(e.target.value);
                ele[1]=e.target.value;
                console.log(ele[1]=parseInt(e.target.value));
                console.log(user);
                setUser(user);
                calculateTotal();
            }// only integers allowed
            }}></input></h2>
            <button className='rmv-btn'>Remove</button>
            </div>
        })
    }
    <div className='cart-total'>
            <Link to="payment"><h3 className='proceedtopay-btn'>Proceed to pay ₹{cartTotal}</h3></Link>
            {
                localStorage.setItem('cartTotal', cartTotal)
            }
    </div>
</div>
}
export default Cart;