import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { ReactComponent as User } from '../../../assets/images/user.svg';
import { ReactComponent as Settings } from '../../../assets/images/settings.svg';
import { ReactComponent as Save } from '../../../assets/images/save.svg';
import { ReactComponent as Chat } from '../../../assets/images/chat.svg';
import { ReactComponent as Grid } from '../../../assets/images/grid.svg'
import { ReactComponent as Folder } from '../../../assets/images/folder.svg'
import { ReactComponent as Trash } from '../../../assets/images/trash.svg'

const { Sider } = Layout;

interface WorkspaceSidebarProps {
    setFilter: Function,
}

const WorkspaceSidebar: React.FC<WorkspaceSidebarProps> = (props) => {
    const handleClick: MenuProps['onClick'] = (e) => {
        props.setFilter(e.key)
    };

    const items: MenuProps['items'] = [
        {
            key: 'account',
            label: <a href="#">Account</a>,
            icon: <User stroke="#999999" style={{ width: 20, height: 20 }} />
        },
        {
            key: 'settings',
            label: <a href="#">Settings</a>,
            icon: <Settings stroke="#999999" style={{ width: 20, height: 20 }} />
        },
        {
            key: 'updates',
            label: <a href="#">Updates</a>,
            icon: <Save stroke="#999999" style={{ width: 20, height: 20 }} />
        },
        {
            key: 'community',
            label: <a href="#">Community</a>,
            icon: <Chat stroke="#999999" style={{ width: 20, height: 20 }} />
        },
        {
            type: 'divider',
        },
        {
            key: 'all',
            label: 'All',
            icon: <Grid stroke="#999999" style={{ width: 20, height: 20 }} />
        },
        {
            key: 'templates',
            label: 'Templates',
            icon: <Folder stroke="#999999" style={{ width: 20, height: 20 }} />
        },
        {
            key: 'archive',
            label: "Archive",
            icon: <Trash stroke="#999999" style={{ width: 20, height: 20 }} />
        },
    ];

    return (
        <Sider width={300} >
            <Menu
                mode="inline"
                defaultSelectedKeys={['all']}
                onClick={handleClick}
                style={{ height: '100%', borderRight: 0, fontSize: 12, color: "#999999" }}
                items={items}
            />
        </Sider>
    );
};

export default WorkspaceSidebar;