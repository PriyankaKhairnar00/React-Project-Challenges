import React from 'react';
import shampoo2 from '../assets/shampoo-2.png';



function Deal() {
  return (
    <>
    <div className='deal'>
      <div>
        <img src={shampoo2} alt="" style={{width:"500px"}}/> 
      </div>
     
     
     <div className='dealCard'>
        <p>Natural & Organic Shampoo</p>
        <h1>DEALS OF THE DAY</h1>
        <h1 className='doller'>$ 99.99</h1>
        <h2>Fresh Organic Shampoo</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At qui commodi aut assumenda </p>

      

    <button className='btn2'>Shop Now</button>
     </div>
    </div>
    </>
    
  )
}

export default Deal