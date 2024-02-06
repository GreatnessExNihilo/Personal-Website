import React from 'react'
import AndroidBotLogo from '../assets/androidbotlogo.png'

function Navbar() {
  return (
    <div classname="navbar">
        <div classname="leftSideOfNavBar"></div>
            <img src={AndroidBotLogo} />
        <div classname="rightSideOfNavBar"></div>
    </div>
  );
}

export default Navbar