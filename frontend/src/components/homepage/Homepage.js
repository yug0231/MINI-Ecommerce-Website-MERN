import {React,useEffect} from "react";
const Homepage =()=>{
    const getProducts=async()=>{
        let products = await fetch('https://fakestoreapi.com/products/')
        products = await products.json();
        console.log(products);
    }
    useEffect(()=>{
        getProducts();  
    },[])
    return(
        <div>
            <h1>Homepage</h1>
        </div>
    )
}
export default Homepage;