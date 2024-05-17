import React from 'react';
import Demo from "../../../assets/images/project-demo-fade.png";

const HomeHeader: React.FC = () => {
    return (
        <section id="hero">
            <div
                className="container flex flex-col items-center px-6 mx-auto gap-y-20 mt-10 space-y-0 md:space-y-0"
            >
                <div className="flex flex-col justify-center items-center max-w-3xl gap-6 ">
                    <h1 className="self-stretch text-center text-white text-[65px] font-semibold leading-[78px]">Design and Develop Beautiful Web Apps easily</h1>
                    <p className="max-w-2xl text-center text-gray-400 text-base font-normal leading-normal">
                        Combine  the ease of use of Figma with the powerful development capabilities of Webflow. Whether you're a designer or a developer, our platform empowers you to create stunning websites without writing a single line of code.
                    </p>
                    <div className="justify-center items-center gap-4 inline-flex">
                        <button
                            className="hidden p-3 px-6 text-white border border-skyBlue bg-skyBlue hover:bg-white hover:text-skyBlue md:block"
                        >Get Started</button>

                        <button
                            className="hidden p-3 px-6 text-skyBlue border border-skyBlue hover:text-white hover:bg-skyBlue md:block"
                        >Learn More</button>
                    </div>
                </div>

                <div className="w-[100%] flex flex-col items-center">
                    <img className="w-[100%] rounded-[25px]" src={Demo} />
                </div>

            </div>
        </section>

    );
};

export default HomeHeader;