import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-glass border-b-[1px] border-base-100 rounded-none font-AbrilFatface text-textPrimary">
                <div className="navbar-start">
                    
                    <a className="btn btn-ghost text-xl">OdinPie</a>
                </div>
                
                <div className="navbar-end flex gap-4 lg:gap-7">
                    <a href='#about'>About&nbsp;Me</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact&nbsp;Me</a>
      <a href="Semester.pdf" target="_blank" download="Maliha_Resume.pdf"><button className='btn z-50'>Resume</button></a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;