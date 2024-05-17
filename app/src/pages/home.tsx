import React from "react";
import HomeHeader from "../components/app/home/header";
import Navbar from "../components/navbar";

const Home: React.FC = () => {

    return (
        <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <Navbar />
            <HomeHeader />
        </div>
    );
};

export default Home;