import React from 'react';

export const Dashboard = () => {
    return (
        <>
            <section className='pb-20 mt-20 ' >
                <div className='container mx-auto'>
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg p-10 mx-auto" style={{ width: '95%' }}>
                        <div className='section-title text-center border-b pb-5'>
                            <h6 className='font-semibold text-muted'>DASHBOARD -</h6>
                            <h4 className='font-bold text-primary text-4xl'>
                                Your
                                <span className=' text-blue'> Dashboard</span>
                            </h4>
                        </div>
                        <div className='mt-10'>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
