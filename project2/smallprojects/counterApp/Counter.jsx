import React, { useState } from "react";


function Counter() {
  const[value,setValue]=useState(0);

  return (
    <>
      <h1>Counter</h1>
      <div className="container">
      <div className="value">{value}</div>

      
        <button className="btn" onClick={()=>setValue(value+1)}>Increase</button>
        <button className="btn" onClick={()=>setValue(value-1)}>Decrease</button>
        <button className="btn" onClick={()=>setValue(0)}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
