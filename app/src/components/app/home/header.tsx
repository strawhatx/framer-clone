import React from 'react';
import Img from '../../../assets/images/editor.png'

const HomeHeader: React.FC = () => {
    return (
        <div className='section'>
            <div className='section-container header'>
                <div className='section-header'>
                    <div className='content'>
                        <div className='header-title'>Design and Develop Beautiful Web Apps easily</div>
                        <div className='header-description'>Combine  the ease of use of Figma with powerful development capabilities. Whether you're a designer or a developer or neither, our platform empowers you to create stunning web apps.</div>
                    </div>
                    <div className='actions'>
                        <button className='btn btn-primary'>
                            START YOUR FREE SITE
                        </button>
                    </div>
                </div>
                <div className='img-wrap'>
                    <img className='image' src={Img} />
                </div>
            </div>
        </div>

    );
};

export default HomeHeader;