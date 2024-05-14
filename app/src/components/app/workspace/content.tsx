import React from 'react';
import DefaultImg from '../../../assets/images/default.png'

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

    return (
        <></>
    );
};

export default WorkspaceContent;