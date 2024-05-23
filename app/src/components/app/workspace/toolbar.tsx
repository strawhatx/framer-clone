import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx'
import { Button, Field, Input, Label, Menu, MenuItem, Transition } from '@headlessui/react'
import { ReactComponent as DownCheveron } from '../../../assets/images/down-cheveron-vector.svg'
import useAuthStore from '../../../store/authentication';
import { setAuthToken } from '../../../config/axios';
import Modal from '../../modal';
import { postSpace } from '../../../hooks/spaces';

//import { ReactComponent as User } from '../../../assets/images/user.svg'

interface MenuItemProps {
    id: number,
    type: string,
    content: any,
}
//
const WorkspaceToolbar: React.FC = () => {
    const [input, setInput] = useState("");
    const [spaces, setSpaces] = useState([]);
    
    const navigate = useNavigate();

    const { signOut, currentUser } = useAuthStore((state) => ({
        signOut: state.signOut,
        currentUser: state.user,
    }));

    const handleSignOut = () => {
        signOut().then(() => setAuthToken(null)).then(() => navigate("/signin"))
            .catch((error: Error) => {
                console.log(error.message)
            })
    }



    const menuItems: MenuItemProps[] = [
        {
            id: 0,
            type: "item",
            content: "My Space",
        },
        {
            id: 1,
            type: "item",
            content: "Team Space",
        },
        {
            id: 2,
            type: "divider",
            content: <div className="my-1 h-px bg-white/5" />
        },
        {
            id: 3,
            type: "button",
            content: <MenuItem>
                <Modal
                    title="Add New Workspace"
                    button={{
                        text: "Add Space",
                        classes: "text-gray-700 block w-full px-4 py-2 text-left text-sm"
                    }}
                    content={
                        <div className="w-full max-w-md px-4">
                            <Field>
                                <Label className="text-sm/6 font-medium text-white">Name</Label>
                                <Input
                                    value={input}
                                    onChange={(event) => setInput(event.target.value)}
                                    className={clsx(
                                        'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                    )}
                                />
                            </Field>
                        </div>
                    }
                    cancel={{
                        enabled: true,
                        text: "Cancel",
                        callback: null,
                    }}
                    confirm={{
                        enabled: true,
                        text: "Save",
                        callback: () => postSpace({userId: currentUser.uid, name: input}),
                    }} />
            </MenuItem>,
        },
        {
            id: 3,
            type: "button",
            content: (
                <MenuItem>
                    <Button
                        type="button"
                        className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                        onClick={handleSignOut}
                    >
                        Sign out
                    </Button>
                </MenuItem>
            ),
        },
    ]

    const menu = (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Options

                    <DownCheveron color="#fff" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`}
                                >
                                    Edit
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Duplicate
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Archive
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Move
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Share
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Add to favorites
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Delete
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )

    return (
        //toolbar 
        <div className="relative mx-auto p-2 bg-neutral-900 border-b border-neutral-800 ">
            {/* Flex Container */}
            <div className="flex items-center justify-between">
                <div className="py-[7px] rounded-lg justify-start items-center gap-2.5 flex">
                    <div className="w-[46px] h-[30px] relative bg-white/opacity-20 rounded-lg shadow">
                        <div className="w-2.5 h-[15px] left-[10px] top-[7.50px] absolute flex-col justify-center items-center inline-flex">
                            <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center inline-flex">
                                <div className="w-2.5 h-[15px] relative" />
                            </div>
                        </div>
                        <div className="w-2 h-2 left-[28px] top-[11px] absolute justify-center items-center inline-flex">
                            <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                                <div className="w-2 h-2 relative flex-col justify-start items-start flex" />
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-1 flex">
                        <div className="w-[54.03px] h-[13.20px] text-white text-xs font-semibold font-['Inter'] leading-[13.20px]">Spaces</div>
                        <div className="w-[5.50px] h-3 pr-[1.67px] origin-top-left rotate-180 flex-col justify-center items-center inline-flex">
                            <div className="w-[3.83px] h-3 text-neutral-400 text-xs font-semibold font-['Inter'] leading-3">·</div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg justify-start items-center gap-2.5 flex">
                    <div className="w-[600px] h-[39px] px-[13px] py-2.5 rounded-[20px] shadow border border-neutral-700 justify-start items-center gap-2.5 flex">
                        <div className="justify-start items-start gap-2.5 flex">
                            <div className="w-6 h-6 relative" />
                            <div className="w-[508px] self-stretch justify-start items-end gap-0.5 flex">
                                <div className="w-[508px] text-neutral-500 text-xs font-normal font-['Inter'] leading-[23px]">type here</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-[15px] justify-center items-center gap-2.5 flex">
                    <div className="w-[84px] pl-[54px] justify-end items-center flex">
                        <div className="w-[30px] self-stretch bg-white/opacity-0 rounded-lg shadow justify-center items-center inline-flex">
                            <img className="w-[30px] h-[30px] relative rounded-lg" src="https://via.placeholder.com/30x30" />
                        </div>
                    </div>
                    <div className="px-2.5 py-[7px] bg-neutral-800 rounded-lg justify-center items-center gap-2.5 flex">
                        <div className="text-center text-white text-xs font-semibold font-['Inter'] leading-[14.40px]">Invite</div>
                    </div>
                    <div className="px-2.5 py-[7px] bg-sky-500 rounded-lg shadow justify-center items-center gap-2.5 flex">
                        <div className="text-center text-white text-xs font-semibold font-['Inter'] leading-[14.40px]">New Project</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WorkspaceToolbar;