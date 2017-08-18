import React, { Component } from 'react'
import './Menu.css'

class Menu extends Component {
  render() {
    return (

        <div className='main-menu-container'>
          <div className=''>
            <p>News</p>
            </div>
            <div className=''>
              <p>Aboute me</p>
              </div>
              <div className=''>
                <p>Text</p>
                </div>
                <div className=''>
                  <p>Anything</p>
                  </div>
          </div>
    
    );
  }
}

export default Menu
{/* <ul>
  <li>News</li>
    <li>Aboute me</li>
        <li>Text</li>
          <li>Anything</li>
        </ul> */}
