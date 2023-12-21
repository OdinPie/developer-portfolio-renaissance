import { motion } from "framer-motion"
import React from 'react';
import leftHand from '../../src/assets/leftHand.png'
import rightHand from '../../src/assets/rightHand.png'
const TouchingHands = () => {
    return (
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
    );
};

export default TouchingHands;