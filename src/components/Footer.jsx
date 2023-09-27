import React from 'react';
import { Link } from 'react-router-dom';    
import '../stylesheets/footer.css';

function Footer(){
    return(
        <div className='footer'>
            <div>
                <p className='footBrand'>get<span  style={{color: '#D434FE'}}>linked</span></p>
                <p>Getlinked Tech Hackathon is a Technology innovation program established by a group of organizations with the aim of showcasing youngand talented individuals in the field of Technology.</p>
                <p>Term of Use | Privacy Policy</p>
            </div>

            <div className='uLinks'>
                <p style={{color: '#D434FE'}}>Useful Links</p>
                <div>
                <Link className='linksF'>Overview</Link>
                <Link className='linksF'>Timeline</Link>
                <Link className='linksF'>FAQs</Link>
                <Link className='linksF'>Register</Link>
                </div>
                <p style={{color: '#D434FE'}}>Follow us</p><span></span><span></span><span></span><span></span>
            </div>

            <div className='ContactUs'>
                <p style={{color: '#D434FE'}}>Contact Us</p>
                <p> +234 6707653444</p>
                <p>27, Alara Street Yaba 100012 Lagos State</p>
            </div>
            {/* <p style={{textAlign:'center'}}>All rights reserved. &copy; getLinked LTD.</p> */}
        </div>
    )
}

export default Footer;