import React from 'react';
import WorkspaceToolbarMenu from './menu';
import { Space } from '../../../../interfaces/space';
import WorkspaceToolbarSearch from './search';
import WorkspaceToolbarSettings from './settings';

interface ToolbarProps {
    spaces: Space[],
    activeSpace: Space,
}
const WorkspaceToolbar: React.FC<ToolbarProps> = (props) => {

    return (
        //toolbar 
        <div className="relative mx-auto p-2 bg-neutral-900 border-b border-neutral-800 ">

            {/* Flex Container */}
            <div className="flex items-center justify-between">
                <WorkspaceToolbarMenu spaces={props.spaces} active={props.activeSpace} />

                <WorkspaceToolbarSearch />

                <WorkspaceToolbarSettings />
            </div>
        </div>

    );
};

export default WorkspaceToolbar;