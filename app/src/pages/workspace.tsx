import React, { useState } from 'react';
import WorkspaceToolbar from '../components/app/workspace/toolbar';
import WorkspaceSidebar from '../components/app/workspace/sidebar';
import WorkspaceContent from '../components/app/workspace/content';

interface SpaceProps {
    userid: number,
    image: string,
    name: string,
}

const Workspace: React.FC = () => {
    const [activeSpace, setActiveSpace] = useState({});
    const [filter, setFilter] = useState("all");


    return (
        <section >
            <WorkspaceToolbar />
            <div>
                <WorkspaceSidebar setFilter={setFilter} />
                <WorkspaceContent filter={filter} />
            </div>
        </section>
    );
};

export default Workspace;