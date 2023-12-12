import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitate buying selling of products or services over the internet 
                serves as a virtual marketplace where business and individual showcase the products, interact with customers, and conduct 
                transactions without the need for a physical presence.  E-commerce websites have gained immense popularity due to
                their convenience accessibility, and the global reach they offer.
            </p>
            <p>
                E-commerce websites physically display products or services a detailed descriptions, images, prices, and 
                any available variables. (e.g., colors).  Each product is usually has its own details with relevant information.
            </p>
        </div>
    </div>
  )
}
