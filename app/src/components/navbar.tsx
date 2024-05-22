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
                <div className="flex pt-2 text-white gap-2">
                    <Logo  />
                    Stakt
                </div>

                {/* Menu Items */}
                <div className="hidden space-x-6 md:flex">
                    <Link to="/" className="text-white hover:underline-offset-4">Home</Link>
                    <Link to="#" className="text-white hover:underline-offset-4">Templates</Link>
                    <Link to="#" className="text-white hover:underline-offset-4">Resources</Link>
                    <Link to="#" className="text-white hover:underline-offset-4">Community</Link>
                    <Link to="#" className="text-white hover:underline-offset-4">About</Link>
                </div>

                {/* Button */}
                <Link to="/signup"
                    className="hidden p-2 px-5 text-white bg-sky-500 hover:bg-sky-300 md:block"
                >Get Started</Link>

                {/* Hamburger Icon */}
                <button
                    id="menu-btn"
                    className="block text-white hamburger md:hidden focus:outline-none"
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