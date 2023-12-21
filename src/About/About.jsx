import React from 'react';
import Lottie from "lottie-react";
import programmer from '../../src/assets/programmer.json'
const About = () => {
    return (
        <div id='about' className='pt-56 lg:flex gap-12 justify-center items-center z-100 overflow-hidden'>
            <div className='max-w-full lg:w-1/3 text-right'>
                <div>
            <h1 className='font-TulpenOne font-bold text-7xl'>Hello I am Maliha</h1>
            <h1 className='font-AbrilFatface font-bold text-xl -mt-4'>Also know as <span className='text-[#eccfb5]'>Odinpie</span></h1>
            </div><br /><br />
            <div>
                <p className='font-thin text-xl'>
                &emsp;&emsp; I am a passionate front end web developer from Bangladesh. Currently I am pursuing Bachelors
                 in Information & Communication Engineering. I believe everything has a story to tell and I like to 
                illustrate them through websites. My preference is React and Next JS. I work with HTML, CSS, Tailwind, JS, 
                MongoDB, NodeJS, Express JS and MySQL. 
                </p>
            </div>
            </div>
            <div className='flex justify-end'>
                <Lottie animationData={programmer} className='w-96'></Lottie>
            </div>
        </div>
            
    );
};

export default About;