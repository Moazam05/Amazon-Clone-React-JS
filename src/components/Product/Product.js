import React from 'react';
import { useStateValue } from '../ContextAPI/StateProvider';
import './Product.css';

function Product({ id, title, image, rating, price }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    // ! dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        rating,
        price,
      },
    });
  };

  return (
    <>
      <div className='product'>
        <div className='product_info'>
          <p>{title}</p>
          <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='product_rating'>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
        </div>

        <img src={image} alt='' />
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </>
  );
}

export default Product;
