import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import React from 'react';


const WorkspaceSettings: React.FC = (props) => {

    return (
        //Settings
        <TabGroup vertical>
            <TabList className="flex flex-col">
                <Tab>Invite</Tab>
                <Tab>Members</Tab>
                <Tab>Plan</Tab>
                <Tab>Permissions</Tab>
                <Tab>Fonts</Tab>
                <Tab>Details</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>Invite Content</TabPanel>
                <TabPanel>Members Content</TabPanel>
                <TabPanel>Plan Content</TabPanel>
                <TabPanel>Permissions Content</TabPanel>
                <TabPanel>Fonts Content</TabPanel>
                <TabPanel>Details Content</TabPanel>
            </TabPanels>
        </TabGroup>
    );
};

export default WorkspaceSettings;