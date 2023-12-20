import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-glass border-b-[1px] border-base-100 rounded-none font-AbrilFatface text-textPrimary">
                <div className="navbar-start">
                    
                    <a className="btn btn-ghost text-xl">OdinPie</a>
                </div>
                
                <div className="navbar-end flex gap-4 lg:gap-7">
                    <a className="">About&nbsp;Me</a>
                    <a className="">Projects</a>
                    <a className="">Contact&nbsp;Me</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;