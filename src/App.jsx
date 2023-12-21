import AnimatedCursor from "react-animated-cursor"
import Navbar from "./Navbar/Navbar"
import currentTime from '../src/Components/currentTime';
import { useState } from "react";
import Home from "./Home/Home";
import Hidden from "./Home/Hidden";
import About from "./About/About";
import Projects from "./Projects/Projects";
import TouchingHands from "./TouchingHands/TouchingHands";
function App() {
  const [date,month] = currentTime();
  const [hovering, setHovering] = useState(false);

  return (
    // <div className="app text-textPrimary">
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
    </div>
  )
}

export default App
