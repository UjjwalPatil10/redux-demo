import React from 'react';

export const Documents = () => {
    return (
        <>
            <section className='pb-5 lg:pb-20 mt-5 lg:mt-20' >
                <div className='container mx-auto '>
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg p-10 mx-auto" style={{ width: '95%' }}>
                        <div className='section-title text-center border-b pb-5'>
                            <h6 className='font-semibold text-muted'>DOCUMENTS -</h6>
                            <h4 className='font-bold text-primary text-4xl'>
                                Your
                                <span className=' text-blue'> Documents</span>
                            </h4>
                        </div>
                        <div className='mt-10'>
                            <div className='description mt-10'>
                                <p className='text-primary text-justify mt-2'>
                                </p>
                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm text-primary ">
                                        <li className="border-b py-3 text-gray">
                                            <span className="text-base text-primary text-xl font-semibold">
                                                Anti Bribery Corruption Policy
                                            </span>
                                        </li>
                                        <li className="border-b py-3 text-gray">
                                            <span className="text-base text-primary text-xl font-semibold">
                                                Anti-Money Laundering Policy and Terrorist Financing
                                            </span>
                                        </li>
                                        <li className="border-b py-3 text-gray">
                                            <span className="text-base text-primary text-xl font-semibold">
                                                Client Terms Of Business Agreement
                                            </span>
                                        </li>
                                        <li className="border-b py-3 text-gray">
                                            <span className="text-base text-primary text-xl font-semibold">
                                                Data Protection Policy
                                            </span>
                                        </li>
                                        <li className="border-b py-3 text-gray">
                                            <span className="text-base text-primary text-xl font-semibold">
                                                BTI Defective Title Insurance Application Form
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
