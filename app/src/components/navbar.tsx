import React from 'react';
import { ReactComponent as Logo } from "../assets/images/logo-vector.svg"
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {

    return (
        //Navbar 
        <nav className="realitive container mx-auto p-6">
            {/* Flex Container */}
            <div className="flex items-center justify-between">

                {/* Logo */}
                <div className="pt-2">
                    <Logo style={{ width: 40, height: 40 }} />
                    Stakt
                </div>

                {/* Menu Items */}
                <div className="hidden space-x-6 md:flex">
                    <Link to="#" className="hover:text-white">Home</Link>
                    <Link to="#" className="hover:text-white">Templates</Link>
                    <Link to="#" className="hover:text-white">Resources</Link>
                    <Link to="#" className="hover:text-white">Community</Link>
                    <Link to="#" className="hover:text-white">About</Link>
                </div>

                {/* Button */}
                <button
                    className="hidden p-3 px-6 pt-2 text-white bg-skyBlue rounded-full baseline hover:bg-skyBlue md:block"
                >Get Started</button>

                {/* Hamburger Icon */}
                <button
                    id="menu-btn"
                    className="block hamburger md:hidden focus:outline-none"
                >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <div
                    id="menu"
                    className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                >
                    <Link to="#">Home</Link>
                    <Link to="#">Templates</Link>
                    <Link to="#">Resources</Link>
                    <Link to="#">Community</Link>
                    <Link to="#">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;