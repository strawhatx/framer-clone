import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import WorkspaceToolbar from '../components/app/workspace/toolbar';

const { Content, Sider } = Layout;

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

const Workspace: React.FC = () => {
    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

    return (
        <Layout style={{background; "#262626"}}>
            <WorkspaceToolbar />
            <Layout>
                <Sider width={200} style={{ background: colorBgContainer }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items2}
                    />
                </Sider> 
                <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            //background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Content
                    </Content>
            </Layout>
        </Layout>
    );
};

export default Workspace;