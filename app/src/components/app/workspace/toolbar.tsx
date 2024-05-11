import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, Dropdown, Space, Input, Button, Divider, Flex, message } from 'antd';
import { ReactComponent as Arrow } from '../../../assets/images/down-cheveron-vector.svg'
import { ReactComponent as User } from '../../../assets/images/user.svg'

const { Header } = Layout;
const { Search } = Input;

const WorkspaceToolbar: React.FC = () => {

    const onClick: MenuProps['onClick'] = ({ key }) => {
        message.info(`Click on item ${key}`);
    };

    const items: MenuProps['items'] = [
        {
            key: 'space',
            label: 'Spaces',
            type: 'group',
            children: [
                { key: 'my-space', label: 'My Space' },
                { key: 'test', label: 'Test Space' },
                { key: 'team', label: 'Team Space' },
            ],
        },
        {
            type: 'divider',
        },
        {
            key: 'add-space',
            label: 'Add Space',
        },
        {
            type: 'divider',
        },
        {
            key: 'sign-out',
            label: 'Sign out',
        },
    ];

    const styles = {
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 60,
            borderBottomWidth:1,
            borderColor: "#262626",
            borderStyle: "solid"
        },
        white:{
            color: "#FFFFFF",
        },
        logo: {
            padding: 10,
            lineHeight: 1,
            borderRadius: 7,
            background: "#0099FF",
            color: "#FFFFFF",
            whiteSpace: "nowrap"
        },
        logoDark: {
            padding: 10,
            display: "flex",
            fontSize: 10,
            lineHeight: 1,
            borderRadius: 7,
            background: "#252525",
            color: "#FFF",
            whiteSpace: "nowrap"
        },
        search:{
            maxWidth: 500,
            fontSize: 12,
        }
    }

    return (
        <Header style={ styles.header }>
            <Dropdown menu={{ items, onClick }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space style={ styles.white }>
                        <div style={ styles.logo }>M</div>

                        {"My Workspace"}

                        <Arrow stroke="white" style={{ width: 10, height: 10 }} />
                    </Space>
                </a>
            </Dropdown>

            <Search style={styles.search} placeholder="input search text..." allowClear />

            <Space>
                <div style={ styles.logoDark}><User stroke="white" style={{ width: 14, height: 14 }} />1</div>

                <Button type='default'>Invite</Button>

                <Button type='primary'>New Project</Button>
            </Space>

        </Header>
    );
};

export default WorkspaceToolbar;