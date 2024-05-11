import React from 'react';
import { Layout, Select, Col, Row, Space, Card } from 'antd';
import DefaultImg from '../../../assets/images/default.png'

const { Content } = Layout;

interface WorkspaceContentProps {
    filter: string,
}

interface ListProps {
    items: Array<any>,
}

const WorkspaceContent: React.FC<WorkspaceContentProps> = (props) => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const items: ListProps['items'] = [
        {
            key: '1',
            label: 'Untitled',
            image: DefaultImg,
            lastUpdate: '04/08/2024'
        },
        {
            key: '2',
            label: 'Aria Travel',
            image: DefaultImg,
            lastUpdate: '04/08/2024'
        },

    ];

    const styles = {
        heading: {
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        container: {
            gap: 32,
            padding: "100px 120px 20px",
        },
        content: {
            margin: 0,
            minHeight: 280,
        },
        title: { },
        description: {
            fontSize: 8,
            color: "#999999"
        },
    }

    return (
        <Layout style={styles.container}>
            <Space style={styles.heading} >
                <h2>All</h2>
                <Select
                    defaultValue="last-viewed"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                        { value: 'last-viewed', label: 'Last viewed' },
                        { value: 'last-edited', label: 'Last edited' },
                        { value: 'a-z', label: 'Alphabetically' },
                    ]}
                />
            </Space>


            <Content style={styles.content} >
                <Row gutter={30}>
                    {items.map((itm) => (
                        <Col key={itm.key} span={12}>
                            <Card
                                hoverable
                                style={{ width: '100%' }}
                                cover={<img alt="example" src={itm.image} />}
                            >
                                <Space style={{display: "block"}}>
                                    <div style={styles.title}>{itm.label}</div>
                                    <div style={styles.description}>{itm.lastUpdate}</div>
                                </Space>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Content>
        </Layout>
    );
};

export default WorkspaceContent;