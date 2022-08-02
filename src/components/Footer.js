import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import '../styles/footer.css';
function Footer()
{
return(<div className="footer">
<div className="socialMedia">
<FacebookIcon/>
<TwitterIcon/>
<LinkedInIcon/>
<InstagramIcon/>
</div>
<p>&copy;2021canadianpizza.com</p>    
</div>)
}
export default Footer;