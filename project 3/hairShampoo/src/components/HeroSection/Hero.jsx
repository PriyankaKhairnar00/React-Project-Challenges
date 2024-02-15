import React from 'react';
import shampoo from '../assets/shampoo.png'

function Hero() {
  return (
    <>
    <div className='heroSection'>
      <div className='heading'>
        <h3 className='heading-3'>Natural & Organic</h3>
        <h1 className='heading-1'>Hair <span className='heading-span'>Shampoo</span> For Healthy Hair</h1>
        <p className='para'>Lorem ipsum dolor sit amet,  adipisicing elit. Saepe eveniet sed  officia distinctio dolorum, laborum quasi illum cum aliquid! Error ipsa voluptates blanditiis perspiciatis velit voluptatum?</p>
        <div className=''>
          <button className='btn'>Shop Now</button>
          <button className='btn'>Contact Us</button>
        </div>

      </div>
<div className='bottleimg'>
   <img src={shampoo} alt="" style={{width:'500px'}}/>
</div>

    </div>
    </>
  )
}

export default Hero