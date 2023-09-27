import React from "react";
import img17 from '../images/img17.png';
import Nav from "../components/Navbar";
import '../stylesheets/register.css';

function Register(){
    return(
        <div className="registerHere">
           <div>
                <Nav />
           </div>

           <div className="registerMe">
                <div>
                    <img src={img17} alt="" style={{width: '100%'}} />
                </div>
                <div className="letsRegister">
                    <p>Register</p>
                    <p>Be a part of this movement</p>
                </div>
           </div>

           {/* <div className="register">
                <div className="registerImg">
                    <img src={img17} alt="" style={{width: '100%'}} />
                </div>
                <div className="myForm">
                    <p className="regisLeadText">Register</p>
                    <p>Be a part of this movement</p>
                    <p>CREATE YOUR ACCOUNT</p>
                    <form className="myRegisterForm">

                        <div className="firstFormDiv">
                            <div className="">
                                <label htmlFor="">Team's Name: </label> <br />
                                 <input type="text" placeholder="Enter the name of your group" />
                            </div>
                            <div>
                            <label htmlFor="">Phone</label> <br />
                                <input type="text" placeholder="Enter your phone number" />
                            </div>
                        </div>

                       <div className="firstFormDiv">
                            <div className="">
                                <label htmlFor="">Email: </label> <br />
                                 <input type="text" placeholder="Enter your email address" />
                            </div>
                            <div>
                            <label htmlFor="">Project Topic</label> <br />
                                <input type="text" placeholder="What is your group project topic?" />
                            </div>
                        </div>

                        <div className="firstFormDiv">
                            <div className="">
                                <label htmlFor="">Category </label> <br />
                                 <input type="text" placeholder="Select your category" />
                            </div>
                            <div>
                            <label htmlFor="">Group Size</label> <br />
                                <input type="text" placeholder="Select" />
                            </div>
                        </div>

                        <p style={{fontSize: 'smaller'}}>Please review your registration details before submitting</p>
                        <p style={{fontSize: 'smaller'}}><input type="checkbox" /> I agreed with te events terms and condition and privacy policy</p>

                        <button className="regisBtn">Register Now</button>

                    </form>
                </div>
           </div> */}
        </div>
    )
}

export default Register;