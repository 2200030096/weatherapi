import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { RiHome2Fill,  RiLoginBoxFill, RiRegisteredFill, RiAdminFill } from 'react-icons/ri'; // Import icons from React Icons
import Home from './Home';
import Support from './Support';
import './style.css';
import Registration from '../user/Registration';
import UserLogin from '../user/UserLogin';
// import Suggestions from './Suggestions';
import AdminLogin from './../admin/AdminLogin';
import clima from "../images/image3.jpg"
import { animated, useSpring } from 'react-spring'; // Import from react-spring
import Forecast from './Forecast';
import ChartDis from './ChartDis';

export default function MainNavBar({ onAdminLogin,onUserLogin}) {
  const [text] = useState('Clima Cast'); // Text to animate

  const animation = useSpring({
    from: { transform: 'translate3d(100%, 0, 0)' }, // Start from right side
    to: { transform: 'translate3d(-100%, 0, 0)' }, // Move to left side
    loop: true, // Loop the animation
    delay: 2000, // Delay before starting animation
    duration: 5000, // Animation duration (5 seconds)
  });

  return (
    <div>
      <nav>
      <img src={clima} alt="Your Logo" className="navbar-logo"  /> 
      <animated.div style={animation}> {/* Wrap text in animated div */}
          <span className="navbar-text">{text}</span>
        </animated.div>
          <ul>
            <Link to="/home"><RiHome2Fill />Home</Link>
            <Link to="/forecast">ForeCast</Link>
            <Link to="/charts1">Charts</Link>
            <Link to="/userlogin"><RiLoginBoxFill />Login</Link>
            <Link to="/registration"><RiRegisteredFill/>Registration</Link>
            <Link to="/adminlogin"><RiAdminFill/>Admin Login</Link>
            <Link to="/support">Support</Link>
          
           
            {/* <Link to="/suggestions">Suggestions</Link> */}
            
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} exact />
        <Route path="/charts1" element={<ChartDis/>} exact />
        <Route path="/userlogin" element={<UserLogin onUserLogin={onUserLogin} />} exact />
        <Route path="/registration" element={<Registration />} exact />
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>} exact />
        <Route path="/support" element={<Support />} exact />
        <Route path="/forecast" element={<Forecast/>} exact />
       

        {/* <Route path="/suggestions" element={<Suggestions />} exact /> */}
      </Routes>
    </div>
  );
}