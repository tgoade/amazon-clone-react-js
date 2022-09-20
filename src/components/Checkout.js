import React from 'react';
import './checkout.scss';
import Subtotal from './Subtotal';
//import Header from './Header';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='left'>
            <img className='ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='' />
            <div>
                <h2 className='title'>Your shopping basket </h2>
            </div>
        </div>
        <div className='right'>
            <Subtotal />
        </div>
    </div>    
  )
}

export default Checkout