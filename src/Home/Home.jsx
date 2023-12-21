import React, { useEffect, useState } from 'react';
import currentTime from '../Components/currentTime';
import Navbar from '../Navbar/Navbar';
import CountUp from 'react-countup';
import About from '../About/About';

const Home = () => {
  const [date,month] = currentTime();
  const [hovering, setHovering] = useState(false);
  const [background, setbackGround] = useState(1);

  const changeBackground = () =>{
    const scrollPosition = window.scrollY;
    const scrollOpacity = 1- Math.min(scrollPosition/500,1);
    setbackGround(scrollOpacity);
    // console.log("pos: ",scrollPosition, "opacity: ",scrollOpacity);
    
    
  }

  useEffect(()=>{
        changeBackground()
        window.addEventListener("scroll",changeBackground);

        // return()=>{
        // window.removeEventListener("scroll",changeBackground);
        // }
  },[])
    return (
        <div style={{opacity : background, transition : 'ease-in-out 0.05s'}} className={hovering? "enterTransition text-textPrimary absolute w-full top-0" : "app text-textPrimary absolute w-full top-0"}>
            <Navbar></Navbar>
            <div className="flex justify-between mx-16">
        <div>
          <div className="overflow-clip">
      <h1 className="headerText  font-TulpenOne text-9xl font-extrabold">Developer</h1>
      </div>
      <div className="overflow-clip">
      <h1 className="headerText  font-TulpenOne text-9xl font-extrabold">Designer</h1>
      </div>
        </div>
      
      <div className="overflow-clip">
      <h1 className="headerText  font-TulpenOne text-9xl font-extrabold">Story <br /> Teller</h1>
      </div>
      </div>
      <br /><br />
      <div className="flex">
      <div className="max-w-xl paragraphText mx-20 font-AbrilFatface text-xl">
        <p>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Hey there! I am your friendly neighbourhood front-end developer
         who is always eager to work on  unique and exciting projects. I like telling stories through Minimalist yet Intriguing designs.  Want to create a website that is not boring?
         Let's dive in!
        </p>

      </div>

      <div onMouseEnter={()=>{setHovering(true)}} onMouseLeave={()=>{setHovering(false)}} className="flex items-end mt-10">
        <div className="flex">
        <img className="h-16" src="https://i.imgur.com/C5rx7Ev.png" alt="" />
        <h1 className="font-AbrilFatface font-bold text-9xl">
            <CountUp end={date} duration={7}></CountUp>
        </h1>
        </div>
        <h1 className="font-AbrilFatface font-extrabold text-xl">{month}</h1>
      </div>
      </div>

      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      

        </div>
    );
};

export default Home;