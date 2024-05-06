import React, { useState } from 'react';
import img from '../assets/images/logo-vector.svg'

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleScreen = () => {
        console.log(window.innerWidth);

        let isMobile = window.innerWidth <= 1024;

        if (!isMobile && open) setOpen(false);
    };

    window.addEventListener("resize", handleScreen);

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <div className="logo">
                        <img style={{ width: 30, height: 30 }} src={img} />
                        <div style={{ color: 'white', fontWeight: '600' }}>Staktrix</div>
                    </div>
                </div>

                <button className='btn btn-primary mobile-trigger' onClick={() => setOpen(!open)}>{open ? "CLOSE" : "OPEN"}</button>

                <div className={`nav-content ${open ? 'active' : ''}`}>
                    <div className='links'>
                        <div className="link active">Home</div>
                        <div className="link">Templates</div>
                        <div className="link">Resources</div>
                        <div className="link">Community</div>
                        <div className="link">About</div>
                        <button className='btn btn-primary'>
                            GET STARTED
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;