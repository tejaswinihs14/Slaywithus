import React from 'react';
import './Products.css';

function Products() {
    return (
        <div className="products">
             <div className="products__header">

                <div className="products__header_desc">
                    <h6>Give Your Workout
                    A New Style!</h6>
                    <p>Supreme has been granted trademarks in many countries including countries in North America, Europe and Asia.</p>
                    <button className="products__header_btn">Explore Now</button>
                </div>
                <div className="products__header_img">
                <img src="https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                </div>

             </div>

             <div className="categories">
                 <div className="small-container">
                    <div className="row">
                    <div className="col-3">
                        <img className="col-3__image" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className="col-3">
                        <img className="col-3__image" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className="col-3">
                        <img className="col-3__image" src="https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </div>
                </div>
            </div>
        </div>

    <div className="small-container">
    <h2 className="title">Featured Products</h2>
    <div className="row">
        <div className="col-4">
            <img className="col-4__image"src="https://images.unsplash.com/photo-1600983639309-5f4695e7d2d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
            </div>
            <p>$50.00</p>
        </div>
        <div className="col-4">
            <img  className="col-4__image" src="https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <h4>Blue Printed T-shirt</h4>
            <div className="rating">
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
            </div>
            <p>$50.00</p>
        </div>
        <div className="col-4">
            <img  className="col-4__image" src="https://images.unsplash.com/photo-1600983639811-dbfeb56b5672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
            </div>
            <p>$60.00</p>
        </div>
        <div className="col-4">
            <img  className="col-4__image" src="https://images.unsplash.com/photo-1601672439947-128aa1ea628b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
            </div>
            <p>$20.00</p>
        </div>
    </div>
    </div>   
    <h2 className="title">Latest Products</h2>
    <div className="row">
        <div className="col-4">
            <img  className="col-4__image " src="https://images.unsplash.com/photo-1600988617849-e99dcfe97f11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
            </div>
            <p>$50.00</p>
        </div>
        <div className="col-4">
            <img  className="col-4__image " src="https://images.unsplash.com/photo-1508243771214-6e95d137426b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <h4>Blue Printed T-shirt</h4>
            <div className="rating">
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star-half-o" ></i>
            </div>
            <p>$50.00</p>
        </div>
        <div className="col-4">
            <img  className="col-4__image " src="https://images.unsplash.com/photo-1554735109-39c2ab93b0ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
            </div>
            <p>$60.00</p>
        </div>
        <div className="col-4">
            <img  className="col-4__image col-4__image-extra" src="https://images.unsplash.com/photo-1515664069236-68a74c369d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <h4>Red Printed T-shirt</h4>``
            <div className="rating">
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
            </div>
            <p>$10.00</p>
        </div>
    </div> 
    <h2 className="title"></h2>   
    <div className="follow-us">
        <h2 >Follow Us</h2>
        <p>Get new content delivered to your inbox.</p>
        <input className="follow-us-input" type = "text" value=""/>
    </div>
    <button className="follow-us-subscribe">Subscribe</button>
 </div>
    )
}

export default Products;
