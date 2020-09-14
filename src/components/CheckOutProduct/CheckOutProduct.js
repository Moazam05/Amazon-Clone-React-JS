import React from 'react';
import { useStateValue } from '../ContextAPI/StateProvider';
import './CheckOutProduct.css';

function CheckOutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //   ! Remove the item from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <>
      <div className='checkoutProduct'>
        <img src={image} className='checkoutProduct_image' alt='' />
      </div>

      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </>
  );
}

export default CheckOutProduct;
