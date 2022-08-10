import React from 'react';
import './deals.scss';

function Deals({headline, image1, image2, image3, image4, product1, product2, product3, product4}){
    return (
        <div className='deal__module' >
            <h2>{headline}</h2>
            <div className='grid-2-2'>
                <div className='cell item-1'><img src={image1} alt='' /><p>{ product1 }</p></div>
                <div className='cell item-2'><img src={image2} alt='' /><p>{ product2 }</p></div>
                <div className='cell item-3'><img src={image3} alt='' /><p>{ product3 }</p></div>
                <div className='cell item-4'><img src={image4} alt='' /><p>{ product4 }</p></div>
            </div>            
            <p className='more'><a href='/'>See more</a></p>
        </div>
    )
}

export default Deals