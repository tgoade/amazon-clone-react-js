import React from 'react';
import './header.scss';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Header() {
  return (
    <div className='nav'>
      <div className='nav__sprite nav__base_logo'>

      </div>
      <div className='nav__location nav__module'>
        <div className='nav__location_pin'>
          <LocationOnOutlinedIcon />
        </div>
        <div className='nav__location_copy'>
          <div className='nav__lineOne'>Hello</div>
          <div className='nav__lineTwo'>Select your address</div>
        </div>
      </div>
      <div className='nav__search'>
          <div className='nav__search_dropdown'>        
            <select>
              <option>All</option>
              <option>Alexa Skills</option>
              <option>Amazon Devices</option>
            </select>        
          </div>
          <div className='nav__search_fill'>
            <input className='nav__search_Input' type='text' />      
          </div>
          <div className='nav__search_icon'>
            <SearchIcon />     
          </div>     
      </div>

      <div className='nav__actions'>
        <div className='nav__module'>
          <img src='./images/united-states.svg' alt="United States" />
          <span className='nav__arrow_down'></span>
        </div>
        <div className='nav__module'> 
          <a href="/">
            <div className='nav__lineOne'>Hello, Sign in</div>
            <div className='nav__lineTwo'>Account &amp; Lists
              <span className='nav__arrow_down'></span>
            </div>
          </a>
        </div>
        <div className='nav__module'>
          <a href="/">
            <div className='nav__lineOne'>Returns</div>
            <div className='nav__lineTwo'>&amp; Orders</div>
          </a>
        </div>
        <div className='nav__module'>
          <a href="/" className='nav__cart'>
            <div className='nav__cart_wrap'>
              <div className='nav__cart_count'>0</div>
              <div className='nav__sprite nav__shopping_basket'></div>
            </div>
            <div className='nav__cart_copy'>
              <div className='nav__lineOne'></div>
              <div className='nav__lineTwo'>Cart</div>          
            </div>
          </a>
        </div>
      </div>
    </div>   
  )
}

export default Header