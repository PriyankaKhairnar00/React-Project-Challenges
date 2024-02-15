import React from "react";
import shampoo1 from '../assets/shampoo-1.png'
function Future() {
  return (
    <>
      <div className="cards">
        <div className="card1">
          <i className="fa fa-leaf"/>
          <h3>100% Natural</h3>
        </div>
        <div className="card2">
          <i className="fa fa-leaf"/>
          <h3>Anti Hair Fall</h3>
        </div>
        <div className="card3">
          <i className="fa fa-leaf"/>
          <h3>Hypoallergenic</h3>
        </div>
      </div>
      <div className="bottom-future">
      <div>
        <img src={shampoo1} alt="" style={{width:"600px"}} />

      </div>


      <div className="rightside">
        <h3 className="heading2">Healthy Hair <span className="span2"> Is A Symbol <br></br>Of Our Beauty</span></h3>
        <p className="para2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod eum dolor debitis totam quidem est! Ex unde nisi deserunt dolores eius. Obcaecati harum fugiat  repudiandae in porro blanditiis nemo quod? Atque sequi ullam vitae nemo possimus saepe sint officia alias maiores nisi!</p>
        
        <p className="para3">amet repudiandae in porro blanditiis nemo quod? Atque sequi ullam vitae nemo possimus saepe sint officia alias maiores nisi!</p>
        <button className="btn2">Shop Now</button>
      </div>
      </div>
      
    </>
  );
}

export default Future;
