import React, { useEffect, useState } from 'react';
import colors from '../libs/colors'
import CodeBackground from './CodeBackground'
import DashboardMockup from './DashboardMockup';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

const Hero = () => {
  return (
    <div className="mt-44 overflow-hidden" style={{ backgroundColor: colors.deepSpaceGray}}>
      {/* Animated code background */}
      <CodeBackground />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(45deg, 
            ${colors.deepSpaceGray} 0%,
            rgba(30, 30, 47, 0.95) 50%,
            rgba(30, 30, 47, 0.9) 100%
          )`
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            <div className="inline-block px-4 py-2 rounded-full mb-4 text-sm"
              style={{ 
                backgroundColor: colors.softCharcoal,
                color: colors.cyberLime
              }}>
              <span className="mr-2">🚀</span> Your Coding Journey, Simplified
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-5">
              <span className="block" style={{ color: colors.offWhite }}>Discover Your</span>
              <span className="block" style={{ color: colors.cyberLime }}>Coding Personality</span>
            </h1>
            <h3 className='text-2xl md:text-2xl font-bold tracking-tight mb-4' style={{ color: colors.offWhite }}>
              Track Your 
              <span className='font-extrabold' style={{ color: colors.amberYellow }}> Coding Journey </span> 
              in One Place
            </h3>
            <p className="text-lg mb-8 text-gray-500">
            Combine your progress from LeetCode and GeeksforGeeks, maintain streaks, revisit solved problems, and discover your unique coding personality—all on one platform
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-6 py-2 text-md font-light rounded-lg text-gray-400 transition-all duration-200 transform hover:scale-105 bg-gray-700"
              >
                    <SignInButton />
              </button>
              <button 
                className="px-6 py-2 text-md font-light rounded-lg text-gray-400 transition-all duration-200 transform hover:scale-105 bg-gray-700"
              >
                    <SignUpButton />
              </button>
            </div>
          </div>

          {/* Right side - Dashboard mockup */}
          <div className="relative">
            {/* Glowing effect behind the mockup */}
            <div 
              className="absolute inset-0 blur-3xl"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${colors.electricBlue}22 0%, transparent 70%)`
              }}
            ></div>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this CSS to your stylesheet
const style = `
@keyframes float {
  from { transform: translateY(100vh) rotate(5deg); }
  to { transform: translateY(-100%) rotate(5deg); }
}

.blur-3xl {
  filter: blur(64px);
}
`;

export default Hero;