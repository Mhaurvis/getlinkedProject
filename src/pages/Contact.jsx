import React, { useState, useEfeect} from "react";
import Nav from "../components/Navbar";
import 'font-awesome/css/font-awesome.min.css';
import '../stylesheets/contact.css';

function Contact(){
    return(
        <div className="contact">
           <div>
                <Nav />
           </div>

            <div className="myContactPage">
                <div className="contactUS">
                    <p>Get in touch</p>
                    <p>Contact <br /> Information</p>
                    <p>27, Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
                    <p>Call Us: 07067981819</p>
                    <p>Were open from Monday-Friday <br /> 08:00am - 05:00pm</p>
                    <p>Share on <br /> 
                        <span className="fa fa-instagram"></span><span className="fa fa-twitter"></span><span className="fa fa-facebook"></span><span className="fa fa-linkedin"></span>
                    </p>
                </div>
                <div className="contactForm">
                    <p style={{color: '#D434FE'}}>Questions or need assistance? <br /> Let us know about it!</p>

                 <form className="myForm" action="">
                   <div>
                    <input type="text" placeholder="First Name" />
                   </div>
                   <div>
                    <input type="text" placeholder="Mail" />
                   </div>
                   <div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                   </div>
                 </form>

                 <button className=" formButton">Submit</button>
                 <p className="contactLinks">Share on <br /> 
                        <span className="fa fa-instagram"></span><span className="fa fa-twitter"></span><span className="fa fa-facebook"></span><span className="fa fa-linkedin"></span>
                    </p>
                </div>
            </div>

            

        </div>
    )
}

export default Contact;