import React from "react";
import "../styles/menu.css";
const MenuItem = (items) =>
{

return(<div className="menuItem">
<div style={{ backgroundImage: `url(${items.image})` }}> </div>   
<h1>{items.name}</h1>
<p>${items.price}</p> 
  
</div>)
}
export default MenuItem;