import React, { useState } from 'react'
import './user_interface.css';
import ProductCard from '../base_model/productCard.js';
import { useNavigate } from "react-router-dom";
const UserInterface = () => {
    const navigate = useNavigate();
    const [showProfileOptions, setShowProfileOptions] = useState(false);
    const products=[
      {id:1,imgsrc:'',name:'',desc:''},
      {id:2,imgsrc:'',name:'',desc:''},
      {id:3,imgsrc:'',name:'',desc:''},
      {id:4,imgsrc:'',name:'',desc:''}
    ];
    const handleProfileClick = () => {
      setShowProfileOptions(!showProfileOptions); // Toggle the profile options
    };
  
    const handleOptionClick = (option) => {
      if (option === "logout") {
        console.log("Logging out");
        navigate("/login"); // Navigate to login page
      }
    };
  return (
    <div className=''>
        <div className='nav-bar'>
           <span className='heading'>AUTOMOBILE</span>
            <button className='profile-btn' onClick={handleProfileClick}></button>
            {showProfileOptions && (
          <div className='profile-options'>
            <ul>
              <li onClick={() => handleOptionClick("profile")}>Username</li>
              <li onClick={() => handleOptionClick("logout")}>Log Out</li>
            </ul>
          </div>
        )}
        </div>
        <div className='greeting'>
          <center><span>Hello user</span></center>
        </div>
        <div className='products'>
          {
            products.map(p=>(
              <ProductCard
                key={p.id}
                imgSrc={p.imgsrc}
                name={p.name}
                desc={p.desc}
              />
            ))
          }
        </div>
    </div>
  )
}

export default UserInterface