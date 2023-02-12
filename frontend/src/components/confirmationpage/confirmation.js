import { Link } from "react-router-dom";

const clearCart=async(req,res)=>{
    let user = JSON.parse(localStorage.getItem("user"));
        let cart = await fetch(
          `http://localhost:8080/user/addtocart`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: user._id,
              cart :[]
            }),
          }
        );
}


const Confirmation =()=>{
    clearCart();
    return <div>
        <h1 style={{width:"50%", margin:"auto", marginTop:"200px"}}>Thank-You For Your Order</h1>
        <div style={{width:"20%", margin:"auto", backgroundColor:"salmon", color:"white", padding:"10px", borderRadius:"10px",marginTop:"20px"}}><Link to="/"><h2>Homepage</h2></Link></div>
    </div>
}
export default Confirmation;