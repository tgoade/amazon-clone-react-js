import React from 'react';
import './product.scss';
import Price from './Price';
import Button from './Button';
import Brand from './Brand';
// import { v4 as uuidv4 } from 'uuid';

function Product({ title, image, addPrice, addButton, rating, count, addBrand, addMoto }) {
  return (
    <div className='product__module' >
        <div className='product__visual' >
          <div className='photo'><img src={image} alt={title} className='product__photo' /> </div>
          <Brand addBrand={addBrand} addMoto={addMoto} />
        </div>             
        <div className='product__info' >
          <p>{title}</p>
          <div className='actions' >
            <div className='price_block'>
              <div className='ratings'>
                <span className='stars'>
                  {Array(rating).fill().map((_,i)=>(                  /* map doesn't work unless you first fill the array with something, in this case, undefined. _ is used to indicate an unused variable */
                    <img src='/images/yellow-star.png' alt='' />
                  ))}
                </span>
                <span className='count'>{count}</span>
              </div>
              <Price addPrice={addPrice}/>
            </div>
            <Button addButton={addButton} />
          </div> 
        </div>
    </div>
  )
}

export default Product