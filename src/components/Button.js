import React from 'react';
import './product.scss';

function Button ({ addButton }) {
    if (addButton) {
        return (
            <div className='btn_wrap'>
              <button className='btn'>Add to Cart</button>
            </div>
        )
    }
    return ('');
}

export default Button;
