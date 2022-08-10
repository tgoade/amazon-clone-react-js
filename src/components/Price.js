import React from 'react';
import './product.scss';


function Price({ addPrice }) {
    if (addPrice) {
        return (
            <div className='price'>
                <small>$</small>
                <strong>{addPrice.toFixed(2)}</strong>
                <span className='prime'></span>
            </div>
        )
    }
    return ('');
}

export default Price
