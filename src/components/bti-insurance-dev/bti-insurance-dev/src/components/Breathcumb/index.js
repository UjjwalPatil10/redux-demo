import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Breathcumb = (props) => {
    return (
        <section className='pt-20 pb-20 lg:pt-48 lg:pb-48 breathcumb-section relative overflow-hidden '
            style={{ backgroundImage: '../../assets/header-bg.jpeg' }}>
            <div className='breathcumb-overlay'>
            </div>
            <div className='container mx-auto'>
                <div className='flex items-center justify-start text-left'>
                    <div className='breathcumb-details'>
                        <h3 className='text-primary text-2xl lg:text-6xl md:text-5xl font-bold mt-3'>{props.title}</h3>
                        <p className='flex items-center justify-start text-left text-1xl text-primary mt-3'>
                            <Link to='/home' className='text-primary '>
                                Home
                            </Link>
                            <span> / </span>
                            <span>{props.title}</span>
                        </p>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
