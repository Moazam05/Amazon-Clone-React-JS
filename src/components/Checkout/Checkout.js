import React from 'react';
import './Checkout.css';

import Subtotal from '../Subtotal/Subtotal';
import CheckOutProduct from '../CheckOutProduct/CheckOutProduct';
import { useStateValue } from '../ContextAPI/StateProvider';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <>
      <div className='checkout'>
        {/* Left */}
        <div className='checkout_left'>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
            alt=''
            className='checkout_ad'
          />
          <div>
            <h3>Hello : {user?.email}</h3>
            <h2 className='checkout_title'>Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className='checkout_right'>
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
