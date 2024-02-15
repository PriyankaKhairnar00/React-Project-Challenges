import React from 'react';
import product from '../assets/product-1.png'
import product1 from '../assets/product-2.png'

function Product() {
  return (
    <>
      <div className='pro1'>
        <h1>Our Natural <span className='spanPro'>Hair Products</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non<br></br> malesuada consequat, nibh erat tempus risus.</p>
      </div>

      <div className='cardProduct'>
        <div className='card'>
          <img src={product} alt="" />
          <h3>Hair Shining Shampoo</h3>
          <h1 className='doller'>$ 99.99</h1>
          <button className='btn2'>Add To Cart</button>
        </div>
        <div className='card'>
          <img src={product1} alt="" />
          <h3>Anti-dandruff Shampoo</h3>
          <h1 className='doller'>$ 99.99</h1>
          <button className='btn2'>Add To Cart</button>
        </div>
        <div className='card'>
          <img src={product} alt="" />
          <h3>Anti Hair Fall Shampoo</h3>
          <h1 className='doller'>$ 99.99</h1>
          <button className='btn2'>Add To Cart</button>
        </div>
        <div className='card'>
          <img src={product1} alt="" />
          <h3>Hair Growing Shampoo</h3>
          <h1 className='doller'>$ 99.99</h1>
          <button className='btn2'>Add To Cart</button>
        </div>
      </div>
    </>

  )
}

export default Product