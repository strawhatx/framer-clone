import { Field, Input } from '@headlessui/react';
import React, { useState } from 'react';
import clsx from "clsx";
import { ReactComponent as Search } from '../../../../assets/images/search.svg'

const WorkspaceToolbarSearch: React.FC = () => {
    const [search, setSearch] = useState("")

    return (
        <>
            <Field className="relative">
                <i className="absolute fa fa-search text-gray-400 top-5 left-4"></i>
                <Input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder='Search...'
                    className={clsx(
                        'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                />
            </Field>
        </>
    )
};

export default WorkspaceToolbarSearch