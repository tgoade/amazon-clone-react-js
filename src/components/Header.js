import React from 'react';
import header from './header.module.scss';

function Header() {
  return (
    <div className={header.nav}>
      <div className={`${header.nav__sprite} ${header.nav__base_logo}`}>

      </div>
      <div className={header.nav__location}>
        <div className={`${header.nav__sprite} ${header.nav__location_pin}`}></div>
        <div className={header.nav__location_copy}>
          <span className={header.nav__greeting}>Hello</span>
          <span className={header.nav__greeting_address}>Select your address</span>
        </div>
      </div>
      <div className={header.nav__search}>
        <input className={header.nav__searchInput} type='text' />
        {/* icon */}
      </div>

      <div className={header.nav__actions}>
        <div className={header.nav__module}>
          
        </div>
        <div className={header.nav__module}> 
          <span className={header.nav__greeting}>Hello</span>
          <span className={header.nav__greeting_name}>Account &amp; Lists</span>
        </div>
        <div className={header.header__module}>
          
        </div>
        <div className={header.header__module}>
          
        </div>
      </div>
    </div>   
  )
}

export default Header