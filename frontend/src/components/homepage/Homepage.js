import { React, useEffect, useState } from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [user,setUser]= useState("");
  const getProducts = async () => {
    let data = await fetch("https://fakestoreapi.com/products/");
    data = await data.json();
    console.log(data);
    setProducts(data);
    navigate("/");
  };
  useEffect(() => {
    getProducts();
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  // const addToCart = async(req,res)=>{
  //     let user = JSON.parse(localStorage.getItem("user"));
  //     let cart = await fetch(`http://localhost:8080/user/addtocart`,{
  //         method:"PATCH",
  //         headers:{
  //             "Content-Type":"application/json"},
  //         body:JSON.stringify({
  //             userId : user._id,
  //             productId : productId,
  //             quantity : quanitiy
  //         })
  //     })
  //     cart = await cart.json();
  //     res.send(cart);
  //     alert("added to cart")
  // }

  return (
    <div>
      <h1>Homepage</h1>
      <div className="products-display">
        {products.map((ele, index) => {
          return (
            <div className="product-card">
              <img src={ele.image} />
              <h2>{ele.title}</h2>
              <h2>₹{ele.price}</h2>
              <button
                className="addToCartBtn-Mainpage"
                onClick={async (req, res) => {
                  let cart = await fetch(
                    `http://localhost:8080/user/addtocart`,
                    {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        userId: user._id,
                        productId: {ele},
                        quantity: 1,
                      }),
                    }
                  );
                  alert("added to cart");
                }}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Homepage;
