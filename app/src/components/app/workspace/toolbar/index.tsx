import React from 'react';
import WorkspaceToolbarMenu from './menu';
import { Space } from '../../../../interfaces/space';
import WorkspaceToolbarSearch from './search';

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
                <WorkspaceToolbarMenu spaces={props.spaces} active={props.activeSpace}/>
                
                <WorkspaceToolbarSearch />
                
                <div className="py-[15px] justify-center items-center gap-2.5 flex">
                    <div className="w-[84px] pl-[54px] justify-end items-center flex">
                        <div className="w-[30px] self-stretch bg-white/opacity-0 rounded-lg shadow justify-center items-center inline-flex">
                            <img className="w-[30px] h-[30px] relative rounded-lg" src="https://via.placeholder.com/30x30" />
                        </div>
                    </div>
                    <div className="px-2.5 py-[7px] bg-neutral-800 rounded-lg justify-center items-center gap-2.5 flex">
                        <div className="text-center text-white text-xs font-semibold font-['Inter'] leading-[14.40px]">Invite</div>
                    </div>
                    <div className="px-2.5 py-[7px] bg-sky-500 rounded-lg shadow justify-center items-center gap-2.5 flex">
                        <div className="text-center text-white text-xs font-semibold font-['Inter'] leading-[14.40px]">New Project</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WorkspaceToolbar;