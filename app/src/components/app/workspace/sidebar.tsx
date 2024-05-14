import React from 'react';
import { ReactComponent as User } from '../../../assets/images/user.svg';
import { ReactComponent as Settings } from '../../../assets/images/settings.svg';
import { ReactComponent as Save } from '../../../assets/images/save.svg';
import { ReactComponent as Chat } from '../../../assets/images/chat.svg';
import { ReactComponent as Grid } from '../../../assets/images/grid.svg'
import { ReactComponent as Folder } from '../../../assets/images/folder.svg'
import { ReactComponent as Trash } from '../../../assets/images/trash.svg'

interface WorkspaceSidebarProps {
    setFilter: Function,
}

const WorkspaceSidebar: React.FC<WorkspaceSidebarProps> = (props) => {
    const handleClick = (e: any) => {
        props.setFilter(e.key)
    };

    return (
        <></>
    );
};

export default WorkspaceSidebar;