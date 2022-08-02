
import MenuItem from "./menuItem";
import { MenuList } from "../helpers/menuList";
import "../styles/menu.css";
const Menu = () =>
{
return(<div className="menu">
<h1 className="menuTitle">Our Menu</h1> 
<div className="menuList">
{MenuList.map(m =>
    {
   
   return(<MenuItem name={m.name} image={m.image} price={m.price}/>)
    })}
    </div>
</div>);
}
export default Menu;