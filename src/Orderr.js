import React from 'react';
import './Orderr.css';
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Orderr({ orderr }) {
    return (
        <div className="orderr">
            <h2>Order</h2>
            <p>{moment.unix(orderr.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="orderr__id">
                <small>{orderr.id}</small>
            </p>
            {orderr.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}

<CurrencyFormat
                renderText={(value) => (
                    <h3 className="orderr__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={orderr.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   

            
        </div>
    )
}

export default Orderr;
