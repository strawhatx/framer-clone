import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx'
import { Button, Field, Input, Label, Menu, MenuItem, Transition } from '@headlessui/react'
import { ReactComponent as DownCheveron } from '../../../assets/images/down-cheveron-vector.svg'
import useAuthStore from '../../../../store/authentication';
import { setAuthToken } from '../../../../config/axios';
import Modal from '../../../modal';
import { useGetHook } from '../../../../hooks/use-get';
import { usePostHook } from '../../../../hooks/use-post';

//import { ReactComponent as User } from '../../../assets/images/user.svg'

interface MenuItemProps {
    id: number,
    type: string,
    content: any,
}

interface SpaceProps {
    userid: number,
    name: string,
}
//
const WorkspaceToolbarMenu: React.FC = () => {
    const [input, setInput] = useState("");
    const [spaces, setSpaces] = useState([]);


    const navigate = useNavigate();

    const { signOut, currentUser } = useAuthStore((state) => ({
        signOut: state.signOut,
        currentUser: state.user,
    }));

    const get = useGetHook(`/spaces/user/${currentUser.uid}`);

    const post = usePostHook(`/spaces/`, { userId: currentUser.uid, name: input });

    useEffect(() => {
        get.callback();

        setSpaces(get.data.map((item: SpaceProps, index: number) => {
            return {
                id: parseFloat(`1.${index}`),
                type: "item",
                content:
                    <Menu.Item>
                        {({ active }) => (
                            <Button
                                type="button"
                                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                onClick={handleSpaceSwitch}
                            >
                                {item.name}
                            </Button>
                        )}
                    </Menu.Item>
            }
        }))

    }, []);

    const handleSignOut = () => {
        signOut().then(() => setAuthToken(null)).then(() => navigate("/signin"))
            .catch((error: Error) => {
                console.log(error.message)
            })
    }

    const handleSpaceSwitch = () => {
       
    }

    const menuItems: MenuItemProps[] = [
        ...spaces,
        {
            id: 2.1,
            type: "divider",
            content: <div className="my-1 h-px bg-white/5" />
        },
        {
            id: 2.2,
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
                        callback: () => post.callback(),
                    }} />
            </MenuItem>,
        },
        {
            id: 2.3,
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

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Spacing

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
                    {menuItems.map((item) => item.content)}
                </Menu.Items>
            </Transition>
        </Menu>
    )
};

export default WorkspaceToolbarMenu;