import React from 'react';
import './Order.css';

function Order() {
    return (
        <div className="order">
             <div className="track-order">
                <h2>WHERE IS MY ORDER?</h2>
                <p>Login or use the Order Tracker to quickly track you order,view order details,and start ot track a return</p>
                <button className="track-button">LogIn</button>
                <button className="track-button">Order Tracker</button>
                
            </div>
            <div className='Order-return'>
                    <button className="track">Return</button>
                    <button className="track">Refund</button>
                </div>
            
        </div>
    )
}

export default Order
