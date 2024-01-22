import React from 'react';
import { Link } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid';

export const ChangePassword = () => {
    return (
        <>
            <section className='pb-10 lg:pb mt-20' >
                <div className='container mx-auto'>
                   
                    <div className='flex justify-center align-center mt-20 w-full'>
                        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white md:w-6/12 rounded-2xl">
                            <div className=" max-w-xl space-y-8">
                                <div className='section-title text-center border-b pb-5'>
                                    <h6 className='font-semibold text-muted'>PRIVACY -</h6>
                                    <h4 className='font-bold text-primary text-4xl'>
                                        Change
                                        <span className=' text-blue'> Password</span>
                                    </h4>
                                </div>
                            
                                <form className="mt-8 space-y-6" action="#" method="POST">
                                    <input type="hidden" name="remember" defaultValue="true" />
                                    <div className="-space-y-px rounded-md shadow-sm">
                                        <div className="group relative w-72 md:w-80 lg:w-96">
                                            <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Old Password</label>
                                            <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                        </div>
                                    </div>

                                    <div className="-space-y-px rounded-md shadow-sm">
                                        <div className="group relative w-72 md:w-80 lg:w-96">
                                            <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">New Password</label>
                                            <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                            <span className="absolute block pt-1 text-xs text-gray-400 opacity-0 transition-all duration-200 ease-in-out group-focus-within:opacity-100">Helper text: format - Xyz!@#$%^&*_+</span>
                                        </div>
                                    </div>

                                    <div className="-space-y-px rounded-md shadow-sm">
                                        <div className="group relative w-72 md:w-80 lg:w-96">
                                            <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Confirm Password</label>
                                            <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                            <span className="absolute block pt-1 text-xs text-gray-400 opacity-0 transition-all duration-200 ease-in-out group-focus-within:opacity-100">Helper text: format - Xyz!@#$%^&*_+</span>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-blue"
                                        >
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                            </span>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
