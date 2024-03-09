import AnimatedCursor from "react-animated-cursor"
import Navbar from "./Navbar/Navbar"
import currentTime from '../src/Components/currentTime';
import { useState } from "react";
import Home from "./Home/Home";
import Hidden from "./Home/Hidden";
import {Planets} from 'react-preloaders';
import Projects from "./Projects/Projects";
import TouchingHands from "./TouchingHands/TouchingHands";
function App() {

  return (
    <div>
      <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)'
      }}
      outerStyle={{
        border: '3px solid var(--cursor-color)'
      }}></AnimatedCursor>
      <Hidden></Hidden>
      <Home></Home>
      <Projects></Projects>
      <TouchingHands></TouchingHands>
      <Planets  background="linear-gradient(180deg,  #FFC0CB 0%, #8E7AB5 100%)"></Planets>
    </div>
  )
}

export default App
