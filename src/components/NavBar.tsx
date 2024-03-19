import React, { useState } from 'react';
import { GiMaterialsScience } from "react-icons/gi";
import "../css/navbar.css";
import { Button } from '@mui/material';

const TABS = [
    "About",
    "Contact",
    "Pricing"
]

namespace Props {
    export interface NavBar {}
}


export default function NavBar() {
    const [activeTab, setActiveTab] = useState<string>("")

    return (
        <div className='navbar-container'>
            <div id="navbar">
                <div className='brand'>
                    <GiMaterialsScience color="white"/>
                    <h1>Empire Digital Solutions</h1>
                </div>
                <div className='tabs'>
                    {TABS.map(name => (
                        <Button 
                            className={'tab' + (activeTab===name ? ' active' : '')}
                            variant={activeTab === name ? "contained" : "outlined"}
                            onClick={() => setActiveTab(name)}>
                        {name}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}
