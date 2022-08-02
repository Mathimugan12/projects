import Banner from "../assets/images/pizzaLeft.jpg";
import "../styles/contact.css";
const Contact = () =>
{
return(<div className="contact">
<div className="leftSide" style={{ backgroundImage: `url(${Banner})` }}></div> 
<div className="rightSide">
<form action="#">
<label htmlFor="name">Full Name</label>    
<input type="text" id="name"/>    
<label htmlFor="Email">Email</label>    
<input type="email" id="Email"/> 
<label htmlFor="message">Full Name</label>    
<textarea rows="7" id="message"></textarea>
<button>Submit</button>
</form>    
</div>   
</div>)
}
export default Contact;