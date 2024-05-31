import React, { useEffect, useState } from 'react';
import WorkspaceToolbar from '../components/app/workspace/toolbar';
import WorkspaceSidebar from '../components/app/workspace/sidebar';
import WorkspaceContent from '../components/app/workspace/content';
import useAuthStore from '../store/authentication';
import { useGetHook } from '../hooks/use-get';
import { Space } from '../interfaces/space';

const Workspace: React.FC = () => {
    const [spaces, setSpaces] = useState<Space[]>([]);
    const [activeSpace, setActiveSpace] = useState<Space>({
        userId: "", image: "", name: "", type: "", projects: [], tags: [],
    });
    const [filter, setFilter] = useState("all");

    const { currentUser } = useAuthStore((state) => ({
        currentUser: state.user,
    }));

    const get = useGetHook<Space>(`/spaces/user/${currentUser?.uid}`);
    
    const defaultSpace = get.data.find((item, index)=> item.type === "DEFAULT" );

    useEffect(() => {
        get.callback();

        setSpaces(get.data);
        
        if(defaultSpace) setActiveSpace(defaultSpace);

    }, []);

    return (
        <section >
            <WorkspaceToolbar spaces={spaces} activeSpace={activeSpace} />
            <div>
                <WorkspaceSidebar setFilter={setFilter} />
                <WorkspaceContent filter={filter} />
            </div>
        </section>
    );
};

export default Workspace;