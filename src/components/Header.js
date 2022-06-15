import React from 'react';
import header from './header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Header() {
  return (
    <div className={header.nav}>
      <div className={`${header.nav__sprite} ${header.nav__base_logo}`}>

      </div>
      <div className={`${header.nav__location} ${header.nav__module}`}>
        <div className={header.nav__location_pin}>
          <LocationOnOutlinedIcon />
        </div>
        <div className={header.nav__location_copy}>
          <div className={header.nav__lineOne}>Hello</div>
          <div className={header.nav__lineTwo}>Select your address</div>
        </div>
      </div>
      <div className={header.nav__search}>
          <div className={header.nav__search_dropdown}>        
            <select>
              <option>All</option>
              <option>Alexa Skills</option>
              <option>Amazon Devices</option>
            </select>        
          </div>
          <div className={header.nav__search_fill}>
            <input className={header.nav__search_Input} type='text' />      
          </div>
          <div className={header.nav__search_icon}>
            <SearchIcon />     
          </div>     
      </div>

      <div className={header.nav__actions}>
        <div className={header.nav__module}>
          <img src='./images/united-states.svg' alt="United States" />
          <span className={header.nav__arrow_down}></span>
        </div>
        <div className={header.nav__module}> 
          <a href="/">
            <div className={header.nav__lineOne}>Hello, Sign in</div>
            <div className={header.nav__lineTwo}>Account &amp; Lists
              <span className={header.nav__arrow_down}></span>
            </div>
          </a>
        </div>
        <div className={header.nav__module}>
          <a href="/">
            <div className={header.nav__lineOne}>Returns</div>
            <div className={header.nav__lineTwo}>&amp; Orders</div>
          </a>
        </div>
        <div className={header.nav__module}>
          <a href="/" className={header.nav__cart}>
            <div className={header.nav__cart_wrap}>
              <div className={header.nav__cart_count}>0</div>
              <div className={`${header.nav__sprite} ${header.nav__shopping_basket}`}></div>
            </div>
            <div className={header.nav__cart_copy}>
              <div className={header.nav__lineOne}></div>
              <div className={header.nav__lineTwo}>Cart</div>          
            </div>
          </a>
        </div>
      </div>
    </div>   
  )
}

export default Header