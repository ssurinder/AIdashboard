import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import AIIcon from '../../../assets/svg/ai.svg'
import CopyIcon from '../../../assets/svg/copyIcon.svg'
import AddIcon from '../../../assets/svg/add-circle.svg'
import upload from '../../../assets/svg/upload.svg'

const AI = () => {
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }


    return (
        <>
            {/* Card widget */}
            <div className='flex flex-col'>
                <h1 className="text-3xl font-bold text-black">Your AI</h1>
                <div className="mt-10 px-8 py-5 bg-sidebar rounded-xl flex items-center justify-between">
                    <a href="/" className="w-auto py-3 px-6 rounded-full border border-black text-[15px] font-semibold text-black">Active</a>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <MenuButton className="w-40 inline-flex w-full justify-between gap-x-1.5 rounded-lg bg-white px-4 py-3 text-[15px] font-semibold text-gray-900 shadow-sm border border-color">
                                Select Project
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </MenuButton>
                        </div>

                        <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="py-1">
                                <MenuItem>
                                    {({ focus }) => (
                                        <a
                                            href="#"
                                            className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                                        >
                                            Account settings
                                        </a>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ focus }) => (
                                        <a
                                            href="#"
                                            className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                                        >
                                            Support
                                        </a>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ focus }) => (
                                        <a
                                            href="#"
                                            className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                                        >
                                            License
                                        </a>
                                    )}
                                </MenuItem>
                                <form method="POST" action="#">
                                    <MenuItem>
                                        {({ focus }) => (
                                            <button
                                                type="submit"
                                                className={classNames(
                                                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block w-full px-4 py-2 text-left text-sm',
                                                )}
                                            >
                                                Sign out
                                            </button>
                                        )}
                                    </MenuItem>
                                </form>
                            </div>
                        </MenuItems>
                    </Menu>
                </div>
            </div>
            <div className='mt-10 overflow-auto'>
                <div className='max-w-[650px] px-3 mx-auto h-full'>
                        <div className='flex flex-col justify-end items-end w-full mb-4'>
                            <div className=' border border border-color rounded-t-xl rounded-s-xl p-4 w-fit text-[15px] font-normal text-black'>
                                fvdfvd fvdfvd  fvdfvdfv dfvdfv dfvd
                            </div>
                            <span className='text-[11px] font-medium text-black block mt-2'>3 days ago</span>
                        </div>
                        <div className='flex justify-start w-full mb-4'>
                            <div className='flex flex-col'>
                                <img className='mb-3 w-6' src={AIIcon} alt='logo' />
                                <div className='bg-sidebar border border border-color rounded-b-xl rounded-e-xl p-4 text-[15px] font-normal text-black'>
                                    Milan is in the Central European Time (CET) zone, which is UTC+1. However, during daylight saving time (from the last Sunday in March to the last Sunday in October), Milan follows Central European Summer Time (CEST), which is UTC+2.
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <span className='text-[11px] font-medium text-black block mt-2'>3 days ago</span>
                                    <img src={CopyIcon} alt='copy' />
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col justify-end items-end w-full mb-4'>
                            <div className=' border border border-color rounded-t-xl rounded-s-xl p-4 w-fit text-[15px] font-normal text-black'>
                                fvdfvd fvdfvd  fvdfvdfv dfvdfv dfvd
                            </div>
                            <span className='text-[11px] font-medium text-black block mt-2'>3 days ago</span>
                        </div>
                        <div className='flex justify-start w-full mb-4'>
                            <div className='flex flex-col'>
                                <img className='mb-3 w-6' src={AIIcon} alt='logo' />
                                <div className='bg-sidebar border border border-color rounded-b-xl rounded-e-xl p-4 text-[15px] font-normal text-black'>
                                    Milan is in the Central European Time (CET) zone, which is UTC+1. However, during daylight saving time (from the last Sunday in March to the last Sunday in October), Milan follows Central European Summer Time (CEST), which is UTC+2.
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <span className='text-[11px] font-medium text-black block mt-2'>3 days ago</span>
                                    <img src={CopyIcon} alt='copy' />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='max-w-[650px] mt-2 px-3 mx-auto'>
                <div className='flex border border-color rounded-full p-2'>
                        <button className='mr-2'>
                            <img src={AddIcon} />
                        </button>
                        <input className='w-full focus:border-0 focus-visible:shadow-none focus-visible: outline-0 !rounded-0' type="text" />
                        <button className='ml-2'>
                        <img src={upload} />
                        </button>
                    </div>
                    </div>
        </>
    );
};

export default AI;
