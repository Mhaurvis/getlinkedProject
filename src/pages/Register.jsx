import React from "react";
import img17 from '../images/img17.png';
import Nav from "../components/Navbar";
import '../stylesheets/register.css';
import 'font-awesome/css/font-awesome.min.css';


function Register(){
    return(
        <div className="registerHere">
           <div>
                <Nav />
           </div>

           <div className="registerMe">
                <div className="regImg">
                    <img src={img17} alt="" style={{width: '100%'}} />
                </div>
                <div className="letsRegister">
                    <p className="firstLeadText">Register</p>
                    <p className="secondLeadText">Be a part of this movement <span style={{color: 'gold'}} className="fa fa-smile-o"></span></p>
                    <p className="thirdLeadText">CREATE YOUR ACCOUNT</p>

                   <form action="post">
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
                   </form>

                   <p className="regReview">please review your registration details before submitting</p>

                   <span className="regSpan"><input type="checkbox" /> I agree with the terms and conditions and privacy policy </span>

                   <button className="regisBtn">Register Now</button>

                </div>
           </div>
        </div>
    )
}

export default Register;