import React from 'react';
import './Contactus.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AcUnitIcon from '@material-ui/icons/AcUnit';

function Contactus() {
    return (

        <div className="contactus">
      
           
            <div className="customer-care">
                <h2>ASK OUR CUSTOMER CARE</h2>
                <div className="details">
                    <p>Phone : Mon to Fri, 8am to 7pm EST</p>

                </div>
                <div className="message-details">
                    <h2>Send us a message</h2>
                    <div className="Name">
                        <h3>Name</h3>
                        <input className    ="message-input"
                        type="text" value=""></input>
                    </div>
                    <div className="Email">
                        <h3>Email</h3>
                        <input className    ="message-input" type="text" value=""></input>
                    </div>
                    <div className="Message">
                        <h3>Message</h3>
                        <input className    ="message-inputs" type="text" value=""></input>
                    </div>
                    <button className="submit">Submit</button>
                </div>

    <div className="footer_contactus">
    <div className="container">
        <div className="row">
            <div className="footer-col-1">
                <h3>Download Our App</h3>
                <p>Download App for Android and Ios mobile phone</p>
                <div className="app-logo">
                    <img src="https://thumbs.dreamstime.com/b/google-play-app-store-icons-google-play-app-store-icons-editable-vector-illustration-isolated-white-background-123024624.jpg" />
                   
                </div>
            </div>
            <div className="footer-col-2">
            <AcUnitIcon className="header__logo"/>
                <h4>SLAY WITH US</h4>
                <p> That Match Your Style, and Create Your Own Stunning Look. 
                   </p>
            </div>
            <div className="footer-col-3">
                <h3>Useful Links</h3>
             
                    <p>Coupons</p>
                    <p>Blog Post</p>
                    <p>Return Policy</p>
                    <p>Join Affiliate</p>
               
            </div>
            <div className="footer-col-4">
                <h3>Follow us</h3>
               
                    <p>Facebook</p>
                    <p>Youtube</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                
            </div>
        </div>
        
        <p className="copyright">
            Copyright 2020 
        </p>
    </div>
</div>
            </div>
 

        </div>

        
        
        
    )
}

export default Contactus
