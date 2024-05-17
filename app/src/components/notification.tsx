import React from 'react';
import { ReactComponent as Success } from "../assets/images/success-icon-vector.svg";
import { ReactComponent as Warning } from "../assets/images/warning-icon-vector.svg";
import { ReactComponent as Info } from "../assets/images/info-icon-vector.svg";
import { ReactComponent as Error } from "../assets/images/error-icon-vector.svg";

interface NotificationProps {
    title: string,
    message: string,
    severity: "Success" | "Warning" | "Info" | "Error";
}

const Severity = {
    Success: { icon: <Success color="#4ade80" /> , bg: "#f0fdf4"},
    Warning: { icon: <Warning color="#facc15"  />, bg: "#fefce8" },
    Info: { icon: <Info color="#60a5fa" /> , bg: "#eff6ff"},
    Error: { icon: <Error color="#f87171"/>, bg:"#fef2f2" },
};

const Notification: React.FC<NotificationProps> = (props) => {
    return (
        <div id="toast-interactive" className="w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
            <div className="flex">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
                    {Severity[props.severity].icon}
                    <span className="sr-only">Refresh icon</span>
                </div>
                <div className="ms-3 text-sm font-normal">
                    <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">{props.title}</span>
                    <div className="mb-2 text-sm font-normal">{props.message}</div>
                </div>
                <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white items-center justify-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-interactive" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Notification;