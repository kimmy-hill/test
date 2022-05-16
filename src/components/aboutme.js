import React from 'react';
import self from '../assets/IMG_1087_2.jpg'

function AboutMe() {
  return (
 <div className="media py-5 ml-2 d-flex">
  <img src= {self} alt= "" className= "port-img m-2" />
  <div className="media-body m-2">
    <h5>Welcome! </h5>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </div>
</div> 
  );
}

export default AboutMe;