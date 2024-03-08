import React, { useState } from 'react';
import clock from '../assets/clock.png'
import agun_pic from '../../src/assets/agun_pic.png'
import bdbn_pic from '../../src/assets/bdbn_pic.png'
import weave from '../../src/assets/weave.png'
import FirstModal from './firstModal';
import SecondModal from './secondModal';
import ThirdModal from './thirdModal';
const Projects = () => {
    const [hovering, setHovering] = useState(false);
    const [hoveringg, setHoveringg] = useState(false);
    const [hoveringgg, setHoveringgg] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenn, setIsOpenn] = useState(false);
    const [modalIsOpennn, setIsOpennn] = useState(false);

    const openModal = () =>{
        setIsOpen(true);
    }
    const closeModal  = () =>{
        setIsOpen(false);
    }
    const openModall = () =>{
        setIsOpenn(true);
    }
    const closeModall  = () =>{
        setIsOpenn(false);
    }
    const openModalll = () =>{
        setIsOpennn(true);
    }
    const closeModalll  = () =>{
        setIsOpennn(false);
    }
    return (
        <div id='projects' className='pt-44 text-textPrimary relative ml-20'>
            <img src={clock} className='h-96 lg:h-[500px] absolute top-100 right-0 hidden lg:flex' alt="" />
            <div className='overflow-hidden'>
                <div className='flex'>
                <img className="h-7" src="https://i.imgur.com/C5rx7Ev.png" alt="" />
                <h1 className='font-TulpenOne font-bold text-5xl'>Selected Projects</h1>
                </div>

                <div className='py-20 max-w-4xl mx-auto'>

                <div className='flex items-center gap-9 my-10'>
                   
                   <div className='overflow-hidden'>
                   <img onClick={openModalll}  onMouseEnter={()=>{setHoveringgg(true)}} onMouseLeave={()=>{setHoveringgg(false)}} style={{width: "300px", height: "150px", transition: '0.5s ease-in-out'}} className={hoveringgg? "scale-110": "scale-100"} src={weave} alt="" />
                   </div>
                   <div >
                   <h1 className='font-TulpenOne font-bold text-7xl'>WeavePDF</h1>
                   <p className='font-AbrilFatface font-bold text-xl -m-3 text-error'>PDF editing tool website</p>
                   </div>
                   </div>

                    <div className='flex items-center gap-9 my-10 justify-center'>
                    
                    <div className='overflow-hidden'>
                    <img onClick={openModal}  onMouseEnter={()=>{setHovering(true)}} onMouseLeave={()=>{setHovering(false)}} style={{width: "300px", height: "150px", transition: '0.5s ease-in-out'}} className={hovering? "scale-110": "scale-100"} src={agun_pic} alt="" />
                    </div>
                    <div >
                    <h1 className='font-TulpenOne font-bold text-7xl'>Agun News</h1>
                    <p className='font-AbrilFatface font-bold text-xl text-right -m-3 text-error'>News Website</p>
                    </div>
                    </div>

                    <div className='flex items-center gap-9 my-10 justify-end'>
                   
                    <div className='overflow-hidden'>
                    <img onClick={openModall} onMouseEnter={()=>{setHoveringg(true)}} onMouseLeave={()=>{setHoveringg(false)}} style={{width: "300px", height: "150px", transition: '0.5s ease-in-out'}} className={hoveringg? "scale-110": "scale-100"} src={bdbn_pic} alt="" />
                    </div>
                    <div>
                    <h1 className='font-TulpenOne font-bold text-7xl'>BDBN</h1>
                    <p className='font-AbrilFatface font-bold text-xl -m-3 text-error'>Book exchange platform</p>
                    </div>
                    </div>

                    
                </div>

            </div>
            <FirstModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            ></FirstModal>
            <SecondModal
                isOpen={modalIsOpenn}
                onRequestClose={closeModall}
            ></SecondModal>
            <ThirdModal
                isOpen={modalIsOpennn}
                onRequestClose={closeModalll}
            ></ThirdModal>
            
        </div>
    );
};

export default Projects;