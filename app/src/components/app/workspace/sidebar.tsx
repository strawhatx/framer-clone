import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme} from 'antd';

const { Sider } = Layout;

const WorkspaceSidebar: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();

    const items: MenuProps['items'] = [
        {
            key: 'add-space',
            label: 'Add Space',
            icon: <PieChartOutlined />
        },
        {
            key: 'add-space',
            label: 'Add Space',
            icon: <PieChartOutlined />
        },
        {
            key: 'add-space',
            label: 'Add Space',
            icon: <PieChartOutlined />
        },
        {
            key: 'add-space',
            label: 'Add Space',
            icon: <PieChartOutlined />
        },
        {
            type: 'divider',
        },
        {
            key: 'add-space',
            label: 'Add Space',
            icon: <PieChartOutlined />
        },
        {
            key: 'add-space',
            label: 'Add Space',
            icon: <PieChartOutlined />
        },
        {
            key: 'sign-out',
            label: 'Sign out',
            icon: <PieChartOutlined />
        },
    ];

    return (
        <Sider width={300} style={{ background: colorBgContainer }}>
        <Menu
            mode="inline"
            defaultSelectedKeys={['all']}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
        />
    </Sider> 
    );
};

export default WorkspaceSidebar;