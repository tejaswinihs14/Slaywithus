import React, { useState, useEffect } from 'react';
import './Orders.css';
import { db } from "./firebase";
import Orderr from './Orderr';
import { useStateValue } from "./StateProvider";

function Orders() {

        const [{ basket, user }, dispatch] = useStateValue();
        const [orders, setOrders] = useState([]);

        useEffect(() => {
            if(user) {
                db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
            } else {
                setOrders([])
            }
        
          }, [user])
        
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className='orders__order'>
                {orders?.map(orderr => (
                    <Orderr orderr={orderr} />
                ))}
            </div>
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
        </div>
    )
}

export default Orders
