import React, { useState } from 'react'
import logo from "../../Assets/img/logo.png"
import "../Navbar/Navbar.css"
import Hamburger from 'hamburger-react'
import { Button, Drawer, Space } from 'antd';

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
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
                <div className='mob'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <Drawer
                    title="House Of Models"
                    placement={"top"}
                    width={"100%"}
                    onClose={()=>{setOpen(false)}}
                    open={isOpen}
                >
                    <div className='mob-drawer'>
                        <div className='mob-menu'>
                            <span>Features</span>
                            <span>Solution</span>
                            <span>Developers</span>
                            <span>About</span>
                        </div>
                        <div className='mob-btns'>
                            <button className='login-btn'>Login</button>
                            <button className='gs-btn'>Get Started</button>
                        </div>
                    </div>
                </Drawer>
                </div>
            </div>
        </div>
    )
}
