import { Field, Input } from '@headlessui/react';
import React, { useState } from 'react';
import clsx from "clsx";
import { ReactComponent as Search } from '../../../../assets/images/search.svg'

const WorkspaceToolbarSearch: React.FC = () => {
    const [search, setSearch] = useState("")

    return (
        <div className="hidden md:block dark:bg-slate-900 relative pointer-events-auto">
            <div className="w-full flex justify-center items-center text-sm leading-6 bg-neutral-700 rounded-md text-slate-400 ring-1 ring-slate-900/10 shadow-sm py-1 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
                <Search className="mr-3 flex-none" />

                <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder='Search...'
                    className="w-72 bg-transparent border-transparent focus:border-transparent  focus:ring-0 focus:outline-none"
                />

                <span className="ml-auto pl-3 flex-none text-xs font-semibold">⌘K</span>
            </div>
        </div>
    )
};

export default WorkspaceToolbarSearch