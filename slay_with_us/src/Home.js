import React, { Component } from 'react';
import { render } from "react-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import Product from './Product';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';



function Home() {
  
    return (
   
       
        <div className="home">
            <div className="home__container">
                <div>
                <img className="home__image" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                </div>
           
            {/* <Carousel>
        
            <div>
            <img className="home__image" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                </div>
                <div>
                <img className="home__image" src="https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/> 
                </div>
                <div>
                <img className="home__image" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/> 
                </div>
                <div>
                <img className="home__image" src="https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/> 
                </div>
                </Carousel> */}

                <div className="home__row">
                    <Product  title="Heavy and warm clothing to wear in very cold weather-Pastel Coat,Sweater,Puffer Coat,Rainbow Sweater,Striped Scarf" price={89.99}
                    id={14101995}
                    image="https://images.unsplash.com/photo-1586378803006-a1914f40e036?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                    rating={5}/>
                    <Product  title="Drop Shoulder Teddy Crop-top, Tie Back Crop-top, Button Up Lettuce Edge-top, Plaid Drawstring Teddy-Hoop, Mock Neck Rib Knit-tee" price={79.99}
                    id={14101234}
                    image="https://images.unsplash.com/photo-1548549557-dbe9946621da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    rating={4}/>
                    <Product  title="Matching Couple Outfits" price={49.99}
                id={10111994}
                    image="https://images.unsplash.com/photo-1517962847327-e8032e806fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                    rating={4}/>
                <Product  title="Cozy Comfort for KIDS" price={39.99}
                id={14190900}
                    image="https://images.unsplash.com/photo-1544413164-5f1b361f5b69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                    rating={4}/>
                    <Product  title="Satchel bag, Bucket bag, Barrel bag, Hobo bag, Tote bag,Shoulder bag, Clutch" price={169.99}
                id={14109876}
                    image="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    rating={5}/>
                <Product  title="Heels, Indian Sandals , Hiking or Walking shoes, Winter boots, Flip-flops, Clogs, Slippers" price={159.99}
                id={14123476}
                    image="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                    rating={5}/>
                </div>
                {/* <div className="home__row"> */}
                
                {/* <Product  title="Look Fit - Stay Fit " price={69.99}
                id={14100005}
                    image="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    rating={5}/> */}
                {/* </div> */}

                {/* <div className="home__row">
                
                </div> */}
            </div>

            <div className="footer">
                <div className='footer1'>
                        <h2>Exclusive services</h2>

                        <p>Slay With Us services</p>
                        <p>Complementory shipping</p>
                        <p>Memership discounts</p>
                </div>
                <div className='footer2'>
                    <h2>Find us on</h2>
                    <div >
                        <div className="footer-items">
                        < FacebookIcon />
                    <p>Facebook</p>
                        </div>
                        <div className="footer-items">
                        <InstagramIcon/>
                    <p>Instagram</p>
                        </div>
                     <div className="footer-items">
                     <TwitterIcon/>
                    <p>Twitter</p>
                     </div>

                    <div className="footer-items"> 
                    < YouTubeIcon classname="footer-icon"/>
                    <p >Youtube</p>
                        </div>

                    </div>

                    
                    </div>
                    <div className='footer3'>
                        <h2>Sign Up for Slay With Us upadtes</h2>

                        <p>By entering your email address below, you consent to receive our updates</p>
                        <input type='text' value='' placeholder='Email address' className='footer-email'/>
                    
                    </div>
            </div>
            
        </div>
        
    )
}



export default Home
