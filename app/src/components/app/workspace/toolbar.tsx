import React from 'react';
import { Layout, Menu, MenuProps, Dropdown, Space } from 'antd';
import Arrow from '../../../assets/images/down-cheveron-vector.svg'

const { Header } = Layout;

const WorkspaceToolbar: React.FC = () => {

    const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
        key,
        label: `nav ${key}`,
    }));

    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div>
                <div style={{ padding: '20px 20px', borderRadius: 7 }}>M</div>
                <Dropdown menu={{ items1 }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Hover me
                            <img src={Arrow} width={10} height={10} />
                        </Space>
                    </a>
                </Dropdown>

            </div>
        </Header>
    );
};

export default WorkspaceToolbar;