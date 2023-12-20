import React from 'react';
import About from '../About/About';

const Hidden = () => {
    return (
        <div className='relative hiddenText text-textPrimary'>
            <div className='relative hiddenText h-screen ml-40 pt-10 text-textPrimary'>
            <h1 className='font-TulpenOne font-bold text-9xl'>Contact</h1><br />
            <h2 className='font-TulpenOne font-bold text-9xl'>To</h2><br />
            <h2 className='font-TulpenOne font-bold text-9xl'>Hire Me.</h2>
            </div>
            
            <br /><br /><br /><br /><br /><br />
            <About></About>
        </div>
    );
};

export default Hidden;