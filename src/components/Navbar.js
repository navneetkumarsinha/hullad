
import React, { Component } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render()
   {
    return (
        <div class="header">
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <section class="top-nav">
    <div>
      HULLAD
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
    <li><Link to='/' href="#" className='linkone'>HOME</Link></li>
      <li><Link to='/about' href="#"  className='linkone'>ABOUT</Link></li>
      <li><Link to='/form' href="#"  className='linkone'>VOLUNTEER</Link></li>
      <li><Link to='/' href="#"  className='linkone'>DONATE</Link></li>
      <li><Link to='/' href="#"  className='linkone'>CONTACT</Link></li>
    </ul>
  </section>

</div>
    )
  }
}

export default Navbar