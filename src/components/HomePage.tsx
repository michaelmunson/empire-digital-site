import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import "../css/home-page.css";

export default function HomePage() {
  return (
    <div id='section-one'>

        <div className='header'>
            <a className='goto-link'>
                Check us out on GitHub and view the source code for this site
                &nbsp;&nbsp;
                <FaArrowRightLong/>
            </a>
            <h1>Bring your Business to the <br/> Forefront of the Digital Age</h1>
            <p>Empower Your Business with the Full Force of the Modern Web and Harness the Tools You Need for Unprecedented Success</p>
        </div>
    </div>
  )
}
