import React from 'react';
import colors from '../libs/colors'
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
 
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 text-center"
    style={{backgroundColor: colors.deepSpaceGray}}
    >
          <div className="border-t border-gray-700 my-4"></div>
      {/* Feedback Section */}
      <div className="mb-4">
        <p className="text-lg">
          Have feedback or questions? Reach out at: 
          <a 
            href="mailto:your-email@example.com" 
            className="text-blue-400 hover:text-blue-500 underline ml-1"
          >
            raghavendrar312004@gmail.com
          </a>
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-4"></div>

      {/* Links Section */}
      <div className="space-x-6 flex flex-row items-center justify-center text-2xl mt-5 mb-6">
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 transition"
        >
          <FaGithub/>
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 transition"
        >
          <FaLinkedin/>
        </a>
        <a
          href="https://twitter.com/your-twitter-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 transition"
        >
          <FaTwitter/>
        </a>
      </div>

      {/* Bottom Note */}
      <div className="mt-4">
        <p className="text-sm mt-4 mb-4">
          Built with 💻 and ☕ by <span className="font-bold text-blue-400">Raghavendra R</span>, an aspiring software engineer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
