import React from 'react';
import './home.scss';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img src='https://m.media-amazon.com/images/I/81AJi1Tw+VL._SX3000_.jpg' alt='' className='home__image' />
        
            <div className='home__row'>
                <Product />
                <Product />
            </div>
            <div className='home__row'>
                <Product />
                <Product />
                <Product />
            </div>
            <div className='home__row'>
                <Product />
            </div>
        </div>
    </div>
  )
}

export default Home