import React from 'react';
import './code.css'

const CodeBackground = () => {
  const codeLines = [
    'for (let i = 0; i < n; i++) { console.log(i); }',
    'const streak = calculateStreak(userData);',
    'if (isChallengeSolved) { streak++; }',
    'function combineProgress(platforms) { return [...data1, ...data2]; }',
    'let personality = generatePersonalityCode(codingData);',
  ];

  return (
    <div className="animated-code-background">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="code-line" style={{ left: `${index * 10}%` }}>
          {codeLines[Math.floor(Math.random() * codeLines.length)]}
        </div>
      ))}
    </div>
  );
};

export default CodeBackground;
