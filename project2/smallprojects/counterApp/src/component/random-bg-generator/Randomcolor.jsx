import React, { useState } from 'react'

function Randomcolor() {
  const[randomColor,setRandomColor]=useState("#000000");

  const generateRandomColor = () => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setRandomColor(color);
};

  return (
    <>
    <div className='container'>
                    <h3>React Js Generate random Color</h3>

                    <div
                        style={{
                            backgroundColor: randomColor,
                            width: '100px',
                            height: '100px',
                        }}
                    ></div>
                    <p>Random color: {randomColor}</p>
                    <button onClick={generateRandomColor}>Generate Random Color</button>
                </div>
          
    
    </>
    
  )
}

export default Randomcolor