import React from 'react';
import '../stylesheets/home.css';
import img5 from '../images/img5.png';
import img8 from '../images/img8.png' ;
import img3 from '../images/img3.png';
import img9 from '../images/img9.png' ;
import img14 from '../images/img14.png';
import img2 from '../images/img2.png';
import img13 from '../images/img13.png';
import img15 from '../images/img15.png';
import img12 from '../images/img12.png';
import img6 from '../images/img6.png';
import img4 from '../images/img4.png' ;
import img7 from '../images/img7.png' ;

import Nav from '../components/Navbar';
import Footer from '../components/Footer';

function Home(){
    return(
        <div className='home'>
            <Nav />
            <hr />

            <div className='section'>
                <div className='s-leadText'>
                    <p className='s-leadFirstText'>getlinked Tech Hackathon <span style={{color: '#D434FE'}}>1.0</span><span></span></p>
                    <p className='s-leadSecondText'>Participate in getlinked tech Hackathon 2023 stand  a chance to win Big prize </p>
                    <button className='s-Button'>Register</button>
                    <p className='s-leadThirdText'>00<span>H</span> 00<span>M</span> 00<span>S</span></p>
                </div>
                <div className='s-img'>
                    <img src={img8} alt="" style={{width: '100%'}} />
                    <img className='secondImg'  style={{width: '100%'}} src={img3} alt="" />
                    <img className='thirdImg'  style={{width: '100%'}} src={img9} alt="" />
                </div>
            </div> 
            <hr />

            <div className='sectionTwo'>
                <div>
                    <img src={img14} alt=""  style={{width: '100%'}} />
                </div>
                <div className='s2-Text'>
                    <p className='s2-leadText'>Introduction to getlinked <span style={{color: '#D434FE'}}> <br />tech Hackathon 1.0</span></p>
                    <p>Our tech Hackathon is a melting pot of visionaries, and its purpose is as clear as day-to shape the future. Whether your a coding genius, a design
                        maverick, or a concept wizard, youll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of
                        technology, and creating solutions that can change the world. Thats what were all about.
                    </p>
                </div>
            </div>

            <hr />

            <div className='sectionThree'>
                <div className='s3-Text'>
                    <p className='s3-leadText'>Rules and <span style={{color: '#D434FE'}}>Guidelines</span></p>
                    <p>Our tech Hackathon is a melting pot of visionaries, and its purpose is as clear as day-to shape the future. Whether your a coding genius, a design
                        maverick, or a concept wizard, youll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of
                        technology, and creating solutions that can change the world. Thats what were all about.</p>
                </div>
                <div>
                    <img src={img7} alt=""  style={{width: '100%'}} />
                </div>
            </div>
            <hr />

            <div className='sectionFour'>
                <div>
                    <img src={img6} alt="" style={{width: '100%'}} />
                </div>
                <div className='s4-Text'>
                    <p className='s4-leadText'>Judging Criteria <br /> <span style={{color: '#D434FE'}}>Key attributes</span></p>
                    <p><span style={{color: 'rgb(245, 68, 98)'}}>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way
                        or introduces innnovative features.</p>
                    <p><span style={{color: 'rgb(245, 68, 98)'}}>Functionality:</span> Assess how well the situation works. Does it perform its intended functions effectively and without major issues? Judges would Consider
                        the completness and robustness of the solution.</p>
                    <p><span style={{color: 'rgb(245, 68, 98)'}}>Impact and Relevance:</span> Determine the potential impact of the solution in the real world. Does it address a specific prolblem, and is it relevant to the 
                        target audience? Judges would access  the potential social, economic or environmental benefits.</p>
                    <p><span style={{color: 'rgb(245, 68, 98)'}}>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies
                        or algorithms, and the socialbility of the solution.</p>
                    <p><span style={{color: 'rgb(245, 68, 98)'}}>Adherence to Hackathon Rule:</span> Judges will ensure that the team adhered to the rules and guidelines of the hackathon, includong deadlines, use of specific technologies
                        or APIs, and any other competition-specific requirements.</p>

                    <button className='s4-button'>Read More</button>
                </div>
            </div>

            <hr />

            <div className="sectionFive">
                <div>
                    <p className='s5-leadText'>Frequently Ask <span style={{color: '#D434FE'}}> Questions </span></p>
                    <p>We got answers to the question that you might want to ask about getLinked Hackathon 1.0</p>
                    <p>Can I work on a project I started before the Hackathon? <span className='fa fa-plus'></span></p> 
                    <hr />
                    <p>What happens If I need help during the Hackathon? <span className='fa fa-plus'></span></p>
                    <hr />
                    <p>What happens if I dont have an idea for a Project? <span className='fa fa-plus'></span></p>
                    <hr />
                    <p>Can I join a team or do I have to come with one? <span className='fa fa-plus'></span></p>
                    <hr />
                    <p>What happens after the Hackathon ends? <span className='fa fa-plus'></span></p>
                    <hr />
                    <p>Can I work on a project I started before the Hackathon? <span className='fa fa-plus'></span></p>
                    <hr />
                </div>
                <div>
                    <img src={img4} alt="" style={{width: '100%'}}/>
                </div>
            </div>

            <hr />

            <div className="sectionSeven">
                <div>
                    <img src={img5} alt="" style={{width: '100%'}} />
                </div>
                <div>
                    <p className='s5-leadText'>Prizes and <span style={{color: '#D434FE'}}>Rewards</span></p>
                    <p>Highlights of the prices or rewards for winners and participants</p>
                    <img src={img12} alt="" style={{width: '100%'}} />
                </div>
            </div>

            <div className="sectionEight">
               <p className='s7-leadText'>Partners and Sponsors</p>
               <p>Getlinked Hackathon 1.0 is honured to have the following major companies as its partners and sponsors.</p>
               <div>
                    <img src={img15} alt="" style={{width: '100%'}} />
               </div>
            </div>

            <hr />

            <div className="sectionNine">
                <div>
                    <p className='s9-leadText'>PrivacyPolicy and <br /> <span style={{color: '#D434FE'}}>Terms</span></p>
                    <p className='policy1'>Last updated on September 12, 2023</p>
                    <p className='policy2'>Below are our privacy & policy, which outline a lot of goodies, its our aim to always take of our participant

                        <div className='policy'>
                            <p>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This privacy policy
                                outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our
                                event, you consent to the practices described in this policy
                            </p>
                            <p>Licensing Policy</p>
                            <p>Here are terms of Our Standard License</p>
                            <p><span></span> The Standard license grants you a non-exclusive right to navigate and register for ur event</p>
                            <p><span></span>You are licensedto use the item available at any free source sites, for your project development</p>

                            <button className='policyButton'>Read More</button>
                        </div>
                    </p>
                </div>
                <div className='policy-imgs'>
                <img  className='policy2Img'  src={img13} alt="" style={{width: '100%'}} />
                <img src={img2} alt="" style={{width: '100%'}} />
                    
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;