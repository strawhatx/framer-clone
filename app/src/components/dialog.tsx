import React, { useState } from 'react';
import { ReactComponent as Logo } from "../assets/images/logo-vector.svg"
import { Link } from 'react-router-dom';
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';

interface ModalProps {
    button: {
        classes: string,
        text: string
    },
    title: string,
    content: any,
    cancel: {
        enabled: boolean,
        text: string,
        callback: Function,
    },
    confirm: {
        enabled: boolean,
        text: string,
        callback: Function,
    },
}
const Modal: React.FC<ModalProps> = (props) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                className={props.button.classes}
            >
                {props.button.text}
            </Button>

            <Transition appear show={open}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={()=> setOpen(false)}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                                    <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                        {props.title}
                                    </DialogTitle>
                                    <p className="mt-2 text-sm/6 text-white/50">
                                        {props.content}
                                    </p>
                                    <div className="mt-4">
                                        <Button
                                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={close}
                                        >
                                            Got it, thanks!
                                        </Button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Dialog;