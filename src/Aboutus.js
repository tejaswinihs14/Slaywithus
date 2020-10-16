import React from 'react';
import './Aboutus.css';

function Aboutus() {
    return (
       
        <div className="aboutus">
            
            <div className="aboutus__icon">
              <img className="aboutus__icon__us" src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60" alt="" />
            </div>
            <div className="aboutus__description">
                <div className="aboutus__description_1">
                <h6>Fill in your CLOSET… Style with US</h6>
                </div>
                <div className="aboutus__description_2">
                <p>STYLISH is one of the designer brands which will always be ready in presenting and getting to you the latest trends and styles. You can see our latest products in our clothing section: here.</p>
                </div>
                <div className="aboutus__description_3">
                <p>You can always contact us for any questions. Our team would be happy to help.</p></div>

                <div className="aboutus__description_4">
                <p><img className="aboutus__description_4__icon"src="https://www.georginalibrary.ca/en/resourcesGeneral/contact_us_banner1.jpg" alt="" /></p></div>
               
              


            </div>
        </div>
    )
}

export default Aboutus
