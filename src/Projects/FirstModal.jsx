import React from 'react';
import Modal from 'react-modal';
import backArrow from '../../src/assets/backArrow.png'
import agun_pic from '../../src/assets/agun_pic.png'
import express from '../../src/assets/express.png'
const FirstModal = ({isOpen, onRequestClose}) => {
    Modal.setAppElement('#root');
    // console.log('hello');
    const customStyles = {
        content: {
          top: '0%',
          left: '0%',
          right: 'auto',
          bottom: 'auto',
        //   marginRight: '-50%',
        //   transform: 'translate(-50%, -50%)', 
        height: '100%',
        width: '100%' 
        },
      };

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        className='modalBack flex justify-center items-center relative'
      >
            <div className="overlay"></div>

        <div className='flex gap-5 absolute'>
            <div className='hidden md:flex flex-col'>
            <img onClick={onRequestClose} className='w-24 opacity-100' src={backArrow} alt="" />
            <div className='px-10'>
                    <h1 className='font-TulpenOne font-bold text-7xl'>Agun News</h1>
                    <p className='font-AbrilFatface font-bold text-xl pl-12 -m-3 text-error'>News Website</p><br /><br />
                    <p className='font-AbrilFatface font-bold text-xl'>Features : </p>
                    <ul className='pl-10 text-textPrimary font-semibold'>
                        <li type='circle'>Users can log in or sign up to read details</li>
                        <li type='circle'>Users can add articles by logging in</li>
                        <li type='circle'>Users can subscribe to access premium articles <br /> (implemented with Stripe)</li>
                        <li type='circle'>Articles are only published after Admin has approved them</li>
                        <li type='circle'>Only Admin can access the Dashboard</li>
                        
                        <li type='circle'>Admin can</li>
                        <li type='circle'>see the statistics</li>
                        <li type='circle'>Add publishers </li>
                        and many more!
    
                    </ul>
            </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-14'>
                <img className='h-[200px] w-[400px]' src={agun_pic} alt="" />
                <div className='flex gap-10'>
                    <a href="https://agun-news.web.app"><button className='btn'>Live Site</button></a>
                    <a href="https://github.com/OdinPie/Agun-News-Client"><button className='btn'>Source Code</button></a>
                </div>
                <div className='flex gap-2'>
                    <img className='h-10' src="https://symbols.getvecta.com/stencil_25/72_react.76a8d36b4b.svg" alt="" />
                    <img className='h-10' src="https://symbols.getvecta.com/stencil_25/63_nodejs.124d3fe0e1.svg" alt="" />
                    <img className='h-10' src="https://symbols.getvecta.com/stencil_25/41_javascript.0ca26ec4ab.svg" alt="" />
                    <img className='h-10' src="https://symbols.getvecta.com/stencil_25/37_html5.d4d8050235.svg" alt="" />
                    <img className='h-10' src="https://symbols.getvecta.com/stencil_25/14_css3.d930bfb832.svg" alt="" />
                    <img className='h-10' src={express} alt="" />
                    <img className='h-10' src="https://symbols.getvecta.com/stencil_261/25_mongodb.cef7d00b8a.svg" alt="" />
                    <img className='h-10' src="https://symbols.getvecta.com/stencil_3/3_firebase.39b6ba3587.svg" alt="" />
                </div>
                <div className="btn bg-neutral-700" onClick={onRequestClose}>Back</div>

            </div>
        </div>
       

      </Modal>
    );
};

export default FirstModal;