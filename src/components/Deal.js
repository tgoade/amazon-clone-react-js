import React from 'react';
import './deals.scss';

function Deal({headline, image}){
    return (
        <div className='deal__module' >
            <h2>{headline}</h2>
            <div className='grid-1-1'>
                <div className='cell item-1'><img src={image} alt='' /></div>
            </div>       
            <p className='more'><a href='/'>See more</a></p>     
        </div>
    )
}

export default Deal