import React from 'react'
import logo from "../../Assets/img/logo.png"
import "../Navbar/Navbar.css"

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav nav-center'>
                <img src={logo} alt='logo-img' />
                <div className='menu'>
                    <span>Features</span>
                    <span>Solution</span>
                    <span>Developers</span>
                    <span>About</span>
                </div>
                <div className='btns'>
                    <button className='login-btn'>Login</button>
                    <button className='gs-btn'>Get Started</button>
                </div>
            </div>
        </div>
    )
}
