import React from "react";
import './style.css';
import { Carousel } from "react-responsive-carousel";

export default () => (
    <div className="slider-main">
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            swipeable={true}
            stopOnHover={false}
            transitionTime={1000}
            verticalSwipe='natural'
        >
            <div className="home-top-slider-slide">
                <img alt="" src="https://staging.btiinsurance.com/assets/front/image/slider/Flag_of_the_Balearic_Islands.svg" />
                <div className="slide-overlay-content"></div>
                <div className="slide-content">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <div className="ml-4 xl:ml-10 mr-4">
                                <h1 className="text-white text-4xl font-bold tracking-tight text-left text-xl lg:text-6xl">
                                    Let’s plan your
                                    <br />
                                    title insurance today
                                </h1>
                                <p className="text-white mt-6 text-sm lg:text-lg leading-8 text-gray-600 text-left lg:mt-5 mt-2">
                                    Here at BTI we understand the difficulty of purchasing property in Spain, with this in mind we have set up a bespoke insurance for all your property needs. If you are a notary or lawyer in Spain or Europe please register to see all our products available to help your transaction run smoothly and with confidence.
                                </p>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-top-slider-slide">
                <div className="slide-overlay-content"></div>
                <img alt="" src="https://staging.btiinsurance.com/assets/front/image/slider/slider1.png" />
                <div className="slide-content">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <div className="ml-4 xl:ml-10 mr-4">
                                <h1 className="text-white text-4xl font-bold tracking-tight sm:text-6xl text-left">
                                    Let’s plan your
                                    <br />
                                    title insurance today
                                </h1>
                                <p className="text-white mt-6 text-sm lg:text-lg leading-8 text-gray-600 text-left lg:mt-5 mt-2">
                                    Here at BTI we understand the difficulty of purchasing property in Spain, with this in mind we have set up a bespoke insurance for all your property needs. If you are a notary or lawyer in Spain or Europe please register to see all our products available to help your transaction run smoothly and with confidence.
                                </p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-top-slider-slide">
                <div className="slide-overlay-content"></div>
                <img alt="" src="https://staging.btiinsurance.com/assets/front/image/slider/slider3.jpg" />
                <div className="slide-content">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <div className="ml-4 xl:ml-10 mr-4">
                                <h1 className="text-white text-4xl font-bold tracking-tight text-left sm:text-6xl">
                                    Let’s plan your
                                    <br />
                                    title insurance today
                                </h1>
                                <p className="text-white mt-6 text-sm lg:text-lg leading-8 text-gray-600 text-left lg:mt-5 mt-2">
                                    Here at BTI we understand the difficulty of purchasing property in Spain, with this in mind we have set up a bespoke insurance for all your property needs. If you are a notary or lawyer in Spain or Europe please register to see all our products available to help your transaction run smoothly and with confidence.
                                </p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    </div>

);
