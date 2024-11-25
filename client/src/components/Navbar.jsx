import React from 'react'
import colors from '../libs/colors';

const Navbar = () => {

    const links = ["Home", "Features", "About us"];

    return (
        <nav className="fixed w-full z-10 p-2 mb-4 items-center bg-transparent backdrop-blur-xl" style={{ backgroundColor: 'transparent'}}>
        <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
            <div className="flex items-center">
                <span className="text-2xl font-bold" style={{ color: colors.cyberLime }}>
                    Geek<span style={{ color: colors.amberYellow }}>Code</span>
                </span>
            </div>
            <div className="flex items-center space-x-10">
                {
                    links.map((link, index) => (
                        <a href="#features" key={index} className=" text-gray-500 hover:text-gray-400 font-medium transition-colors duration-200">{link}</a>
                    ))
                }
            <button className="px-3 py-1 rounded-lg transition-colors duration-200 text-white"
                style={{ 
                backgroundColor: colors.electricBlue,
                ':hover': { backgroundColor: colors.cyberLime }
                }}>
                Get Started
            </button>
            </div>
        </div>
        </div>
    </nav>
    )
}

export default Navbar