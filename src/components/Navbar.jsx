import { Link } from 'react-router-dom';    
import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import '../stylesheets/nav.css';

function Nav(){

    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className={`navbar ${isOpen ? 'active' : ''}`}>
            <div className="navbar-container">
                <div>
                    <p>get<span style={{color: '#D434FE'}}>linked</span></p>
                </div>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <Link to="/" className='navLinks active'>Timeline</Link>
                        <Link className='navLinks'>Overview</Link>
                        <Link className='navLinks'>FAQs</Link>
                        <Link to="/contact" className='navLinks'>Contact</Link>
                        <Link to="/register"><button className='navButton'>Register</button></Link>
                    </ul>
                </div>
                <div className="navbar-toggle" onClick={toggleNavbar}>
                    <div className={`navbar-icon ${isOpen ? 'active' : ''}`}>
                        <span className='fa fa-bars'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;