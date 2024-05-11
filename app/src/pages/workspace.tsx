import React, { useState } from 'react';
import { Layout } from 'antd';
import WorkspaceToolbar from '../components/app/workspace/toolbar';
import WorkspaceSidebar from '../components/app/workspace/sidebar';
import WorkspaceContent from '../components/app/workspace/content';

const Workspace: React.FC = () => {
    const [filter, setFilter] = useState("all");

    const styles = {
        container: {
            background: "#262626", height: '100vh', fontSize: 12
        }
    }

    return (
        <Layout style={styles.container}>
            <WorkspaceToolbar />
            <Layout>
                <WorkspaceSidebar setFilter={setFilter} />
                <WorkspaceContent filter={filter} />
            </Layout>
        </Layout>
    );
};

export default Workspace;