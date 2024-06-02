import React from 'react';
import WorkspaceToolbarMenu from './menu';
import { Space } from '../../../../interfaces/space';
import WorkspaceToolbarSearch from './search';
import WorkspaceToolbarSettings from './settings';
import useWorkspaceStore from '../../../../store/workspace';

const WorkspaceToolbar: React.FC = (props) => {

    const { activeSpace, spaces } = useWorkspaceStore((state) => ({
        activeSpace: state.active,
        spaces: state.spaces,
    }));

    return (
        //toolbar 
        <div className="relative mx-auto p-2 bg-neutral-900 border-b border-neutral-800 ">

            {/* Flex Container */}
            <div className="flex items-center justify-between">
                <WorkspaceToolbarMenu />

                <WorkspaceToolbarSearch />

                <WorkspaceToolbarSettings />
            </div>
        </div>

    );
};

export default WorkspaceToolbar;