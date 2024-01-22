import React from 'react';

export default function index() {
    return (
        <>
            <section className='coponies-section pt-10 pb-5 xl:pt-10 xl:pb-40 '>
                <div className='container mx-auto '>
                    <div className='section-title text-center '>
                        <h6 className='font-semibold  text-sm xl:text-xl'>LOCATION</h6>
                        <h4 className='font-bold text-primary text-3xl xl:text-6xl mt-2'>Find  <span className=' text-blue'>Us</span></h4>
                    </div>
                    <div className='mt-10 lg:mt-20 shadow-xl bg-white p-3 rounded-xl'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6204.749865117997!2d1.3989030000000002!3d38.961106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129947992073506b%3A0x17b0fee7824175f7!2sAvinguda%20Isidor%20Macabich%2C%201%2C%2007816%20Sant%20Rafel%2C%20Illes%20Balears%2C%20Spain!5e0!3m2!1sen!2sin!4v1674108569256!5m2!1sen!2sin" width='100%' height='600'></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}
