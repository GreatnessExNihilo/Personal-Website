import React from 'react'
import AndroidBotLogo from '../assets/androidbotlogo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div classname="navbar">
        <div classname="leftSideOfNavBar"></div>
            <img src={AndroidBotLogo} />
        <div classname="rightSideOfNavBar">
            <Link to="/"> Home </Link>
            <Link to="/resume"> Resume </Link>
            <Link to="/aboutme"> About Me </Link>
            <Link to="/projects"> Projects </Link>
        </div>
    </div>
  );
}

export default Navbar