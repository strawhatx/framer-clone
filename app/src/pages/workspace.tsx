import React from 'react';

const Workspace: React.FC = () => {
    return (
        <div className="workspace_wrapper">
            <Toolbar />
            <div className="container">
                <Sidebar />
                <Content/>
            </div>
            
        </div>
    );
};

export default Workspace;