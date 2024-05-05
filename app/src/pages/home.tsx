import React from 'react';
import EditorCanvas from '../components/app/home';

const Home: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(17deg, #090909 0%, rgba(40.78, 51.15, 61.52, 0.20) 50%, #050505 100%)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
            <EditorCanvas />
        </div>
    );
};

export default Home;
