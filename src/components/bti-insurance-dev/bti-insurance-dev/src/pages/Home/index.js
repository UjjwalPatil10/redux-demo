import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from '../../components/Slider';
import WorkProcess from '../../components/WorkProcess';
import OurComponies from '../../components/OurComponies';
import Map from '../../components/Map';

export const Home = () => {
  return (
    <div>
        <Slider />
        <WorkProcess />
        <OurComponies/>
        <Map />
    </div>
  )
}
