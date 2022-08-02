import React,{useState} from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/pizzaLogo.png"; 
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar()
{

const [openLink,setOpenlink]=useState(false);
const toggleIcon = () =>
{
    setOpenlink(!openLink)
}
return(<div className="navbar">
<div className="leftSide" id={openLink ? "open" : "close"}>
<img src={Logo} alt="Pizza"/>
<div className="hiddenLinks" >
<Link to="/" exact>Home</Link> 
<Link to="/menu" >Menu</Link> 
<Link to="/about" >About Us</Link> 
<Link to="/contact" >Contact</Link>    
    </div>    
</div>
<div className="rightSide">
<Link to="/" exact>Home</Link> 
<Link to="/menu" >Menu</Link> 
<Link to="/about" >About Us</Link> 
<Link to="/contact" >Contact</Link> 
<button onClick={toggleIcon}>
<ReorderIcon/>    
</button>
</div>
</div>);
}
export default Navbar;