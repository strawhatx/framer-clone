import React from 'react';
import Navbar from '../components/navbar';
import HomeHeader from '../components/app/home/header';

const Home: React.FC = () => {
    return (
        <div className="home_wrapper">
            <Navbar />
            <HomeHeader />
        </div>
    );
};

export default Home;
