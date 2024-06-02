import React from 'react';
import DefaultImg from '../../../assets/images/default.png'


interface ListProps {
    items: Array<any>,
}

const WorkspaceContent: React.FC = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <></>
    );
};

export default WorkspaceContent;