import React from 'react';
import { FaArrowRightLong, FaCode, FaAppStore, FaComputer } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { WiStars } from "react-icons/wi";
import { FaGithub } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";

import "../css/home-page.css";

export default function HomePage() {
  return (
    <div id='home-page'>
        <div id='section-one'>
            <div className='header'>
                <a className='goto-link' href='https://github.com/michaelmunson/empire-digital-site'>
                    <FaGithub />
                    &nbsp;
                    Check us out on GitHub and view the source code for this site
                    &nbsp;&nbsp;
                    <FaArrowRightLong/>
                </a>
                <h1>Bring your Business to the <br/> <i>Forefront</i> of the Digital Age</h1>
                <p>Empower Your Business with the Full Force of the Modern Web and Harness the Tools You Need for Unprecedented Success.</p>
                <div className='button-group'>
                    <button className='button primary'>
                        Learn More
                    </button>
                    <button className='button'>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
        <div id="section-two">
            <h1>Your Ideas. Your Code. Quickly.</h1>
            <hr/>
            <div className='card-group'>
                <div className='card'>
                    <h1><FaCode style={{color:"var(--theme-primary)"}}/>Websites</h1>
                    <div className='icon-list'>
                        <div className='icon-list-item'>
                            <FaComputer/> Responsive & User-Friendly
                        </div>
                        <div className='icon-list-item'>
                            <MdOutlineDashboardCustomize /> Entirely Custom Designs
                        </div>
                        <div className='icon-list-item'>
                            <IoMdPhonePortrait /> Mobile optimization
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <h1><FaAppStore style={{color:"var(--theme-primary)"}}/> Apps </h1>
                    <p></p>
                </div>
            </div>
            <div className='card-group'>
                <div className='card'>
                    <h1><FaAppStore style={{color:"var(--theme-primary)"}}/> Apps </h1>
                    <p></p>
                </div>
                <div className='card'>
                    <h1><FaCode style={{color:"var(--theme-primary)"}}/> SEO </h1>
                    <ul>
                        
                    </ul>
                </div>
                <div className='card'>
                    <h1><FaCode style={{color:"var(--theme-primary)"}}/> SEO </h1>
                    <ul>
                        <li>Reponsie</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
