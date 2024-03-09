import { motion } from "framer-motion"
import React from 'react';
import leftHand from '../../src/assets/leftHand.png'
import rightHand from '../../src/assets/rightHand.png';
import git from '../../src/assets/git.png';
import link from '../../src/assets/link.png';
import mail from '../../src/assets/mail.png';
const TouchingHands = () => {
    return (
        <div id="contact" className="pt-52 pb-32">
            <motion.div className="text-center"
            initial={{opacity:0}}
            whileInView={{opacity:1}} transition={{delay:2.5}}>
                <h1 className='font-TulpenOne text-textPrimary font-bold text-7xl'>Let's get Connected</h1>
            </motion.div>
        <div className="flex w-[100%] overflow-x-hidden">
            <motion.div
            initial={{transform: 'translateX(-200px)'}} 
            whileInView={{transform: 'translateX(0px)'}} transition={{duration:2}}>
                <img className="w-[100%]" src={leftHand} alt="" />
            </motion.div>
            
            <motion.div 
            initial={{transform: 'translateX(200px)'}} 
            whileInView={{transform: 'translateX(0px)'}}  transition={{duration:2}}
            className="flex justify-end"
            >
                <img className="w-[100%]" src={rightHand} alt="" />
            </motion.div>
        </div>
            <motion.div 
            initial={{opacity:0}} 
            whileInView={{opacity:1}} transition={{delay:2}}
            className="flex justify-center gap-10">
                <a href="https://github.com/OdinPie"><img className="h-10 hover:scale-125 ease-in-out duration-150" src={git} alt="github" /></a>
                <a href="https://www.linkedin.com/in/maliha-tabassum-801241210/"><img className="h-10 hover:scale-125 ease-in-out duration-150" src={link} alt="linkedin" /></a>
                <a href="mailto:maliha16tabassum@gmail.com"><img className="h-10 hover:scale-125 ease-in-out duration-150" src={mail} alt="mail" /></a>
            </motion.div>
        </div>
    );
};

export default TouchingHands;