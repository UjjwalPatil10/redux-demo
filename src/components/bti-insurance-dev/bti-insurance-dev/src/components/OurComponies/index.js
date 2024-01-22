import React from 'react';
import './style.css';
import Slider from "react-slick";
import slide1 from './assets/1.jpg';
import slide2 from './assets/2.jpg';
import slide3 from './assets/3.jpg';
import slide4 from './assets/4.png';
import slide5 from './assets/5.png';
import slide6 from './assets/6.png';


export default function Index() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        cursor: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    return (
        <>
            <section className='coponies-section pt-10  xl:pt-10 xl:pb-40'>
                <div className='container mx-auto'>
                    <div className='section-title text-center'>
                        <h6 className='font-semibold  text-sm xl:text-xl'>COMPANIES</h6>
                        <h4 className='font-bold text-primary text-3xl xl:text-6xl mt-2'>Working with our<span className=' text-blue'> regular componies</span></h4>
                    </div>
                    <div className=' xl:mt-20 test'   >
                        <Slider {...settings} >
                            <div className='shadow-card'>
                                <img src={slide1} alt='slide 1' className='mx-auto' />
                            </div>
                            <div className='shadow-card'>
                                <img src={slide2} alt='slide 2' />
                            </div>
                            <div className='shadow-card'>
                                <img src={slide3} alt='slide 3' />
                            </div>
                            <div className='shadow-card'>
                                <img src={slide4} alt='slide 4' />
                            </div>
                            <div className='shadow-card'>
                                <img src={slide5} alt='slide 5' />
                            </div>
                            <div className='shadow-card'>
                                <img src={slide6} alt='slide 6' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
