import React, { useState } from 'react'


export const OnboardingForm = () => {
    const [step, setStep] = useState(0);

    const handleNextStep = () => {
        setStep(step + 1)
        if (step > 1) {
            setStep(step + 1)
        }
    }

    const handlePrevStep = () => {
        if (step >= 0) {
            setStep(step - 1)
        }
    }

    return (
        <>
            <section className='pb-10 lg:pb mt-20   ' >
                <div className='container mx-auto '>
                    <div className='justify-center  mt-20 w-full'>
                        <div className="   py-12 px-12   bg-white  rounded-2xl">
                            <h3 className='bg-blue text-white text-center py-3 text-xl font-bold rounded'>Step {step + 1}</h3>
                            {
                                step == 0 ?
                                    <div>
                                        <form className="mt-6 space-y-6" action="#" method="POST ">
                                            <div className='flex grid-flow-col gap-6 w-full'>
                                                <input type="hidden" name="remember" defaultValue="true" />
                                                <div className="group relative w-full">
                                                    <div className="group relative w-full">
                                                        <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Legal Name of </label>
                                                        <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue w-full" />
                                                    </div>
                                                </div>
                                                <div className="-space-y-px rounded-md shadow-sm w-full">
                                                    <div className="group relative w-full">
                                                        <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Trading Name(s)</label>
                                                        <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                        {/* <span className="absolute block pt-1 text-xs text-gray-400 opacity-0 transition-all duration-200 ease-in-out group-focus-within:opacity-100">Helper text: format - Xyz!@#$%^&*_+</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-10 container grid grid-cols-2 gap-6'>
                                                <div className="group relative w-full">
                                                    <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Calender</label>
                                                    <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                </div>
                                                <div className='group relative w-full'>
                                                    <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">City</label>
                                                    <select className="peer h-10 w-full rounded-md  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue bg-white cursor-pointer" >
                                                        <option>-----Choose City ------</option>
                                                        <option>Missouri</option>
                                                        <option>Texas</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='mt-10 container grid grid-cols gap-6'>
                                                <div>
                                                    <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Address</label>
                                                    <textarea type="text"
                                                        name="address"
                                                        className=" peer h-20 w-full rounded-md  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue bg-white" />
                                                </div>
                                            </div>
                                            <div className='flex grid-flow-col-4 gap-6 w-full'>
                                                <div className='group relative w-full'>
                                                    <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Country</label>
                                                    <select className="peer h-10 w-full rounded-md  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue bg-white cursor-pointer" >
                                                        <option>-----Choose Country ------</option>
                                                        <option>Missouri</option>
                                                        <option>Texas</option>
                                                    </select>
                                                </div>
                                                <div className='group relative w-full'>
                                                    <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">State</label>
                                                    <select className="peer h-10 w-full rounded-md  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue bg-white cursor-pointer" >
                                                        <option>-----Choose State ------</option>
                                                        <option>Missouri</option>
                                                        <option>Texas</option>
                                                    </select>
                                                </div>
                                                <div className="group relative w-full">
                                                    <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Mobile Number</label>
                                                    <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                </div>
                                                <div className="group relative w-full">
                                                    <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Email</label>
                                                    <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                </div>
                                            </div>
                                            <div className=' mt-10 container grid grid-cols-4 gap-4'>
                                                <div >
                                                    <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Web Site</label>
                                                    <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                </div>
                                                <div className='col-span-3'>
                                                    <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Briefly describe the nature of  your primary business activities</label>
                                                    <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    :
                                    step == 1 ?
                                        <div>
                                            <form className="mt-6 space-y-6" action="#" method="POST ">
                                                <div>
                                                    <div class="flex items-center">
                                                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Is the Firm a Subsidiary of , or controlled by ,  any other organization ?</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Who are the major shareholders of the firm? (Indicate all organization(s)/individual(s) that own 10% or more of the firm)</label>
                                                    <textarea type="text"
                                                        name="address"
                                                        className=" peer h-20 w-full rounded-md  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue bg-white" />
                                                </div>
                                                <div>
                                                    <div class="flex items-center">
                                                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Are you affiliated with any Insurance Company/Broker/Agent? </label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        :
                                        <div>
                                            <form className="mt-6 space-y-6" action="#" method="POST ">
                                                <div className='mt-10 container grid grid-cols-2 gap-4'>
                                                    <div className="group relative w-full">
                                                        <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Who regulates your Firm?</label>
                                                        <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                    </div>
                                                    <div className="group relative w-full">
                                                        <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Registration number</label>
                                                        <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                    </div>
                                                </div>
                                                <div className='mt-10 container grid grid-cols-2 gap-4'>
                                                    <div className="group relative w-full">
                                                        <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Regulator website address </label>
                                                        <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                    </div>
                                                    <div className="group relative w-full">
                                                        <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Are you authorised by the regulator to hold client money?</label>
                                                        <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                    </div>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Is the firm a member of any Insurance or trade association?</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="default-checkbox" type="checkbox" value="" class="w-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Has membership ever been declined ,cancelled or withdrawn?</label>
                                                </div>
                                                <div className='mt-10 container grid grid-cols-2 gap-4'>
                                                    <div className="group relative w-full">
                                                        <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Company Registration Number? (Enclose copy of E&S Licence if USA)</label>
                                                        <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                    </div>
                                                    <div className="group relative w-full">
                                                        <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">LIoyd's Registration Are you registered as an Open Market Correspondent at LIoy </label>
                                                        <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                    </div>
                                                    <div class="flex items-center">
                                                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="default-checkbox" class="  ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Has the Firm or any oneof  its employees,officers,directors or shareholders ever had any licence or authorisation suspended or revoked,been refused relicensing or authorisation? If so ,please describe.</label>
                                                    </div>
                                                </div>
                                                <div className='mt-10 container grid grid-cols-2 gap-4'>
                                                    <div className="group relative w-full">
                                                        <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Total Number of Staff</label>
                                                        <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Out of which : Directors/Principles </label>
                                                    <textarea type="text"
                                                        name="address"
                                                        className=" peer h-20 w-full rounded-md  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue bg-white" />
                                                </div>
                                                <div className='mt-10 container grid grid-cols-2 gap-4'>
                                                    <div className="group relative w-full">
                                                        <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Producers/Account Execution</label>
                                                        <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                    </div>
                                                    <div className="group relative w-full">
                                                        <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Administrative</label>
                                                        <input id="2" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue" />
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                            }

                            {/* steps button  */}
                            <div class="flex">
                                <button class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-gray mt-10 rounded-l">
                                    Clear & Cancel
                                </button>
                                <button class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-blue mt-10 rounded-l ml-5" onClick={handlePrevStep}>
                                    GoBack
                                </button>

                                {
                                    step <= 2 ?
                                    <button class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-primary mt-10 ml-5 " onClick={handleNextStep}>
                                    Next
                                </button>
                                    
                                    :
                                    <button
                                        type="submit"
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-primary mt-10 ml-5"
                                    >
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                                        </span>
                                        Submit
                                    </button>
                                    
                                }
                              
                                {/* {
                                    step == 3 &&
                                    <button
                                        type="submit"
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-blue mt-10"
                                    >
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        </span>
                                        Submit
                                    </button>
                                } */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}