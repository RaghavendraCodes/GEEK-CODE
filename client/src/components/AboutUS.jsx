import React from 'react';
import colors from '../libs/colors';
import './code.css'

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-16 px-6 lg:px-20"
    style={{backgroundColor: colors.deepSpaceGray}}
    >
      {/* Heading */}
      
      <div className="text-center mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tighter"
        style={{color: colors.cyberLime}}
        >
          <span className='' style={{color: colors.amberYellow}}>About Me </span> and 
          <span className='' style={{color: colors.amberYellow}}> the Journey</span> Behind This Project
        </h1>
        <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
          A project crafted by an engineering student, aiming to simplify the coding journey for developers.
        </p>
      </div>

      {/* Who I Am Section */}
        <div className="max-w-4xl mx-auto mb-4 px-10">
          <h2 className="text-2xl font-bold mb-3 tracking-tighter text-center" style={{color: colors.neonPurple}}>Who I Am</h2>
          <p className="text-gray-400 leading-relaxed text-center">
            Hi, I'm Raghavendra R, an engineering student passionate about coding and problem-solving. 
            As someone who loves exploring technology and building tools to make life easier, 
            I wanted to create something that could resonate with fellow coders and their challenges.
          </p>
        </div>

        {/* Why I Built This Section */}
        <div className="max-w-4xl mx-auto mb-4 px-10">
          <h2 className="text-2xl font-bold mb-3 tracking-tighter text-center" style={{color: colors.neonPurple}}>Why I Built This</h2>
          <p className="text-gray-400 leading-relaxed text-center">
            This platform was born out of my own struggles with keeping track of coding progress across platforms like LeetCode and GeeksforGeeks. 
            I realized the need for a unified space to track, revisit, and analyze progress in a way that also keeps the motivation alive.
          </p>
        </div>

      {/* What This Project Means Section */}
      <div className="max-w-4xl mx-auto px-10">
        <h2 className="text-2xl font-bold mb-3 tracking-tighter text-center" style={{color: colors.neonPurple}}>What This Project Means</h2>
        <p className="text-gray-400 leading-relaxed text-center">
          For me, this project is more than just code—it's a representation of how technology can solve everyday problems for coders like me. 
          It’s also been an incredible learning journey, helping me grow as a developer and contribute to the coding community.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
