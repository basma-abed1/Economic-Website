import React from 'react'
import {FaFacebook , FaInstagram,FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='footer-row'>
         <div className='col'>
           <h2>Get In Touch</h2>
           <p>Lorem ipsum dolor sit</p>
           <div className='social'>
            <a href='#'> <FaFacebook /></a>
            <a href='#'> <FaInstagram /> </a>
            <a href='#'> <FaTwitter /></a>
           </div>
           </div>
           <div className='col'>
            <h2>Company Info</h2>
            <ul>
              <li><a href='#'>About Us</a></li>
               <li><a href='#'>Carrier</a></li>
               <li><a href='#'>We ar hiring</a></li>
               <li><a href='#'>Blog</a></li>
            </ul>
           </div>

           <div className='col'>
            <h2>Featurs</h2>
            <ul>
              <li><a href='#'>Business Markiting</a></li>
              <li><a href='#'>User Analytic</a></li>
              <li><a href='#'>Live Chat</a></li>
              <li><a href='#'>Unlimlted Support</a></li>
            </ul>
           </div>

           <div className='col'>
            <h2>Resourcess</h2>
            <ul>
              <li><a href='#'>IOS &Android</a></li>
              <li><a href='#'>watch a Demo</a></li>
              <li><a href='#'>Customers</a></li>
              <li><a href='#'>API</a></li>
            </ul>
           </div>
        
        </div>
        <div className='copyright'>
          <p>&copy 2026 | All right reseved made by <a href='' target='_blank'>Basma Alsayed</a></p>
        </div>
      </div>
    </footer>
  )
}
