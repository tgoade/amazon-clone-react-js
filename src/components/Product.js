import React from 'react';
import './product.scss';

function Product() {
  return (
    <div className='product__module'>
        {/* <h2>Trending Deals</h2> */}
        <div className='product__visual'>
          <div className='photo'><img src='https://m.media-amazon.com/images/I/718mXByu96L._AC_SX240_SY280_.jpg' alt='' className='product__photo' /> </div>
          <div className='brand'>
            <img src='https://m.media-amazon.com/images/I/41xhzdbIs0L._AC_AC_SX240_SY140_.jpg' alt='' />
            <p className='moto'>Name a more iconic beauty brand, we’ll wait</p>
          </div>
        </div>             
        <div className='product__info'>
          <p>Olay Regenerist Retinol 24 Max Moisturizer...</p>
          <div className='actions'>
            <div className='price_block'>
              <div className='ratings'>
                <span className='stars'></span>
                <span className='count'>5724</span>
              </div>
              <div className='price'>
                  <small>$</small>
                  <strong>36.09</strong>
                  <span className='prime'></span>
              </div>
            </div>
            <div className='btn_wrap'>
              <button className='btn'>Add to Cart</button>
            </div>
          </div>
          {/* <p className='product__orig_price'><small>List Price: $44.99</small></p> */}
            
        </div>
    </div>
  )
}

export default Product