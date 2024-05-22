import React from 'react';
import { ReactComponent as Arrow } from '../../../assets/images/down-cheveron-vector.svg'
import { ReactComponent as User } from '../../../assets/images/user.svg'

const WorkspaceToolbar: React.FC = () => {

    return (
        <div className="w-[1440px] h-[60px] px-5 bg-neutral-900 border-b border-neutral-800 justify-between items-center inline-flex">
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
    );
};

export default WorkspaceToolbar;