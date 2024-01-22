import React from 'react';
import './style.css';
import ProcessBg from './assets/process-shape-1.png';

export default function index() {
    return (
        <section className='work-process-section pt-10 pb-10 xl:pt-40 xl:pb-40 lg:pt-20' >
            <div className='container mx-auto'>
                <div className='section-title text-center'>
                    <h6 className='font-semibold  text-sm xl:text-xl'>WORK PROCESS</h6>
                    <h4 className='font-bold text-primary text-3xl xl:text-6xl mt-2'>Our easy work  <span className=' text-blue'>process in 4 steps</span></h4>
                </div>
                <div className='process-grid mt-12 lg:mt-20 relative'>
                    <div className='process-shape'>
                        <img src={ProcessBg} className='mx-auto' />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4'>
                        <div className='flex items-center lg:justify-end justify-center'>
                            <div className='process-box' >
                                <div className='process-col flex items-center justify-center bg-white lg:mr-12 mr-0'>
                                    <div className='process-step-lable-up'>01</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                    </svg>
                                </div>
                                <div className='mt-4 w-100'>
                                    <h4 className='text-primary font-semibold text-1xl text-center'>Lawyer on boards or <br /> logs in</h4>
                                    <p className='text-gray text-center'>
                                        Please complete the registration form to reived a your loggin details.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* col end */}
                        <div className='flex items-center justify-center lg:pt-32 pt-10'>
                            <div className='process-box'>
                                <div className='process-col flex items-center justify-center bg-white'>
                                    <div className='process-step-lable-down'>02</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                                    </svg>
                                </div>
                                <div className='mt-4 w-100'>
                                    <h4 className='text-primary font-semibold text-1xl text-center'>Lawyer completes <br /> insurance application.</h4>
                                    <p className='text-gray text-center'>
                                        Please complete the application in full with any supporting documentation to help us complete your application quickly and effciently.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* col end */}
                        <div className='flex items-center justify-center lg:pt-24 pt-10'>
                            <div className='process-box'>
                                <div className='process-col flex items-center justify-center bg-white '>
                                    <div className='process-step-lable-up'>03</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </div>
                                <div className='mt-4 w-100'>
                                    <h4 className='text-primary font-semibold text-1xl text-center'>
                                        Application is <br /> reviewed
                                    </h4>
                                    <p className='text-gray text-center'>
                                        Once your application is reviewed we will aim to be in contact within 24hrs to complete your applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* col end */}
                        <div className='flex items-center justify-center'>
                            <div className='process-box'>
                                <div className='process-col flex items-center justify-center bg-white ml-10'>
                                    <div className='process-step-lable-down'>04</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                </div>
                                <div className='mt-4 w-100'>
                                    <h4 className='text-primary font-semibold text-1xl text-center'>Get insurance</h4>
                                    <p className='text-gray text-center'>
                                        Once approved the insurance is issued with immediate effect.
                                    </p>
                                </div>
                            </div>

                        </div>
                        {/* col end */}
                    </div>
                </div>
            </div>
        </section>
    )
}
