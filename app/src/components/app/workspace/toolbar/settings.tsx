import { Button } from '@headlessui/react';
import React, { useState } from 'react';
import Modal from '../../../modal';
import WorkspaceSettings from '../settings';

const WorkspaceToolbarSettings: React.FC = () => {

    const handleNewProject = () => { }

    return (
        <div className="justify-center items-center gap-2.5 flex">
            <Modal
                title="Settings"
                button={{
                    text: "3",
                    classes: "hidden lg:block py-[7px] px-3 text-white text-xs rounded-md bg-neutral-800 hover:bg-neutral-600"
                }}
                content={ <WorkspaceSettings tab="MEMEBERS" /> }
                cancel={{ enabled: false, text: "", callback: null }}
                confirm={{ enabled: false, text: "", callback: null }}
            />

            <Modal
                title="Settings"
                button={{
                    text: "Invite Members",
                    classes: "hidden lg:block py-[7px] px-2.5 text-white text-xs rounded-md bg-neutral-800 hover:bg-neutral-600"
                }}
                content={ <WorkspaceSettings tab="INVITE" /> }
                cancel={{ enabled: false, text: "", callback: null }}
                confirm={{ enabled: false, text: "", callback: null }}
            />

            <Button
                className="py-[7px] px-2.5 text-white text-xs rounded-md bg-sky-500 hover:bg-sky-300"
                onClick={handleNewProject}
            >New Project</Button>
        </div>
    )
};

export default WorkspaceToolbarSettings