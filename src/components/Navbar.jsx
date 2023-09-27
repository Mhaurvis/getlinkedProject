import { Link } from 'react-router-dom';    
import React, { useState, useEffect} from "react";
import 'font-awesome/css/font-awesome.min.css';
import '../stylesheets/nav.css';

function Nav(){

    const [isMobileMenuOpen, setMoileMenuOpen] = useState(false);
    const toggleMobileMenu = () =>{
        setMoileMenuOpen(!isMobileMenuOpen);
    }

    return(
        <div className="navbar">
            <div>
                <p>get<span style={{color: '#D434FE'}}>linked</span></p>
            </div>
            <div className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link className='navLinks'>Timeline</Link>
                    <Link className='navLinks'>Overview</Link>
                    <Link className='navLinks'>FAQs</Link>
                    <Link className='navLinks'>Contact</Link>
                    <button className='navButton'>Register</button>
            </div>
            <div className="mobile-menu-button">
                <span className='fa fa-bars'></span>
            </div>
        </div>
    )
}

export default Nav;