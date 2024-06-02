import React, { useEffect, useState } from 'react';
import WorkspaceToolbar from '../components/app/workspace/toolbar';
import WorkspaceSidebar from '../components/app/workspace/sidebar';
import WorkspaceContent from '../components/app/workspace/content';
import useAuthStore from '../store/authentication';
import useWorkspaceStore from '../store/workspace';

const Workspace: React.FC = () => {
    const [filter, setFilter] = useState("all");

    const { currentUser } = useAuthStore((state) => ({
        currentUser: state.user,
    }));

    const { getSpaces, getDefaultSpace } = useWorkspaceStore((state) => ({
        getSpaces: state.getUserSpaces,
        getDefaultSpace: state.getUserDefaultSpace,
    }));

    useEffect(() => {
        if(!currentUser) return;
        
        getSpaces(currentUser.uid);
        getDefaultSpace(currentUser.uid)

    }, []);

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