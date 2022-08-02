import React from "react";
import {Link} from "react-router-dom";
import "../styles/home.css";
import BannerImage from "../assets/images/pizza.jpeg"
function Home ()
{
return(<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer" >
     <h1>Pizza Hut</h1>
     <p>Pizza Hut is Yummy</p>
     <Link to="/menu">
     <button>Order Now</button> 
     </Link>  
    </div>
    </div>);
}
export default Home;