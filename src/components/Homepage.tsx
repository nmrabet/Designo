import React from 'react';
import image from '../assets/img/header-img.png';


export default function Homepage() {
    return (
        <div>
            <div className='bg-red-500 flex flex-col justify-center items-center pt-16 px-16 text-center space-y-6 text-white'>
                <h3 className='text-3xl font-semibold'>Award-winning custom designs and digital branding solutions</h3>
                <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <button className='bg-white text-black border rounded py-4 px-8 uppercase font-medium'>Learn More</button>
                <img src={image} alt=""/>
            </div>
        </div>
    )
}
