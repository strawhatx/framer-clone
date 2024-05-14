import React from 'react';

const HomeHeader: React.FC = () => {
    return (
        <section id="hero">
            <div
                className="container flex flex-col items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
            >
                <h1 className="self-stretch text-center text-slate-400 text-[65px] font-semibold font-['Poppins'] leading-[78px]">Design and Develop Beautiful Web Apps easily</h1>
                <div className="w-[729px] text-center text-gray-400 text-base font-normal font-['Poppins'] leading-normal">Combine  the ease of use of Figma with the powerful development capabilities of Webflow. Whether you're a designer or a developer, our platform empowers you to create stunning websites without writing a single line of code.</div>
                <div className="w-[299px] h-[58px] justify-start items-center gap-4 inline-flex">
                    <div className="grow shrink basis-0 self-stretch px-6 py-3 bg-sky-500 rounded-[9px] border border-sky-500 justify-center items-center gap-2 flex">
                        <div className="text-white text-base font-normal font-['Roboto'] leading-normal">GET STARTED</div>
                    </div>
                    <div className="grow shrink basis-0 self-stretch px-6 py-3 rounded-[9px] border border-sky-500 justify-center items-center gap-2 flex">
                        <div className="text-sky-500 text-base font-normal font-['Roboto'] leading-normal">LEARN MORE</div>
                    </div>
                </div>

                <div className="w-[1172px] h-[805px] relative">
                    <div className="w-[1172px] h-[805px] left-0 top-0 absolute bg-gradient-to-b from-slate-950 to-slate-950" />
                    <img className="w-[1094px] h-[688px] left-[80px] top-[58px] absolute rounded-[25px]" src="https://via.placeholder.com/1094x688" />
                </div>

            </div>
        </section>

    );
};

export default HomeHeader;