import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ height: 26, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                    <div style={{ width: 88, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                        <div style={{ width: 25, height: 25.56, justifyContent: 'center', alignItems: 'center', gap: 4.44, display: 'flex' }}>
                            <div style={{ width: 25, height: 25 }}></div>
                        </div>
                        <div style={{ color: 'white', fontSize: 17, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>Stakrx</div>
                    </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word' }}>Home</div>
                        <div style={{ opacity: 0.50, color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word' }}>Templates</div>
                        <div style={{ opacity: 0.50, color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word' }}>Resources</div>
                        <div style={{ opacity: 0.50, color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word' }}>Community</div>
                        <div style={{ opacity: 0.50, color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word' }}>About</div>
                    </div>
                </div>
                <div style={{ borderRadius: 7, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', display: 'inline-flex' }}>
                    <div style={{ height: 49, paddingLeft: 20, paddingRight: 20, paddingTop: 8, paddingBottom: 8, background: '#0099FF', border: '1px #0099FF solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word' }}>GET STARTED</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;