import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx'
import { Button, Field, Input, Label, Menu, MenuItems, MenuItem, MenuButton, Transition } from '@headlessui/react'
import { ReactComponent as DownCheveron } from '../../../../assets/images/down-cheveron-vector.svg'
import useAuthStore from '../../../../store/authentication';
import { setAuthToken } from '../../../../config/axios';
import Modal from '../../../modal';
import { Space } from '../../../../interfaces/space';
import useWorkspaceStore from '../../../../store/workspace';

interface MenuItemProps {
    id: string,
    type: string,
    content: any,
}

//
const WorkspaceToolbarMenu: React.FC = () => {
    const [input, setInput] = useState("");
    const [links, setLinks] = useState<MenuItemProps[]>([]);

    const navigate = useNavigate();

    const { signOut, currentUser } = useAuthStore((state) => ({
        signOut: state.signOut,
        currentUser: state.user,
    }));

    const { activeSpace, spaces, createSpace } = useWorkspaceStore((state) => ({
        activeSpace: state.active,
        spaces: state.spaces,
        createSpace: state.createSpace,
    }));

    useEffect(() => {
        setLinks(spaces.map((item: Space, index: number) => {
            return {
                id: item.name,
                type: "item",
                content:
                    <MenuItem>
                        <Link
                            to={"#"}
                            type="button"
                            className="text-gray-700 block w-full px-4 py-2 text-left text-sm">
                            {item.name}
                        </Link>
                    </MenuItem>
            }
        }))

    }, [spaces]);

    const handleSignOut = () => {
        signOut().then(() => setAuthToken(null)).then(() => navigate("/signin"))
            .catch((error: Error) => {
                console.log(error.message)
            })
    }

    const image = activeSpace?.image ?
        <img
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
            src={activeSpace.image}
            alt="workspace-profile"
        />
        : <div className="inline-flex items-center justify-center w-6 h-6 text-white bg-neutral-700 rounded-full">M</div>

    const menuItems: MenuItemProps[] = [
        ...links,
        {
            id: "divider-1",
            type: "divider",
            content: <div className="my-1 h-px bg-white/5" />
        },
        {
            id: "new-workspace",
            type: "button",
            content: <MenuItem>
                <Modal
                    title="Add New Workspace"
                    button={{
                        text: "Add Space",
                        classes: "text-gray-300 block w-full px-4 py-2 text-left text-sm"
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
                        callback: () => createSpace({
                            userId: (currentUser ? currentUser.uid : ""),
                            name: input,
                            type: "ADDITIONAL",
                            image: null,
                            projects: null,
                            tags: null,
                        }),
                    }} />
            </MenuItem>,
        },
        {
            id: "sign-out",
            type: "button",
            content: (
                <MenuItem>
                    <Button
                        type="button"
                        className="text-gray-300 block w-full px-4 py-2 text-left text-sm"
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
                <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-1 text-sm font-semibold text-gray-300 shadow-sm">
                    {image}

                    My Workspace

                    <DownCheveron width={8} height={8} stroke="#FFFFFF" aria-hidden="true" />
                </MenuButton>
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
                <MenuItems
                    anchor="bottom end"
                    className="w-52 origin-top-right rounded-xl border border-white/5 bg-neutral-800 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                >
                    {menuItems.map((item) => item.content)}
                </MenuItems>
            </Transition>
        </Menu>
    )
};

export default WorkspaceToolbarMenu;