import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from "./StateProvider";

function Product({ title, id, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

//   console.log("this is the basket >>>", basket);

    const addToBasket = () => {
        //dispatch item into datalayer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating,
            },
          });
    }
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__info__title">{title}</p>
                <p className="product__info__id">{id}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                    // <p><StarIcon className="star__icon" /></p>
                    <p><i className="fa fa-star" ></i></p>
                     ))}
                </div>
            </div>
            <img src={image} alt="product-images"/>

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
