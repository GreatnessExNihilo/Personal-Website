import React from 'react'
import JumpingBart from '../assets/jumpingbart.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div classname="navbar">
        <div classname="leftSideOfNavBar"></div>
            <img src={JumpingBart} />
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
