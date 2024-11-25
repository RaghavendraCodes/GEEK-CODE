import { useState, useEffect } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import colors from '../libs/colors';

const mockData = Array.from({ length: 30 }, (_, i) => ({
    name: i,
    value: 50 + Math.random() * 50
  }));

  const topicsData = ["T-Array", "T-Graphs", "T-DP", "T-Strings", "T-Trees"]

const DashboardMockup = () => {
    const [animate, setAnimate] = useState(false);
  
    useEffect(() => {
      setAnimate(true);
    }, []);
  
    return (
      <div 
        className={`relative rounded-lg p-4 transition-all duration-1000 transform ${
          animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ backgroundColor: colors.softCharcoal }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.fireRed }}></div>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.amberYellow }}></div>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.cyberLime }}></div>
          </div>
          <div className="text-xs" style={{ color: colors.steelGray }}>GeekCode Dashboard</div>
        </div>
  
        {/* Progress Chart */}
        <div className="h-32 mb-4 mt-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={colors.electricBlue} 
                strokeWidth={2} 
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
  
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {['Streak: 45', 'Problems: 328', 'Rank: S+'].map((stat, index) => (
            <div 
              key={index}
              className="p-2 rounded text-center text-xs"
              style={{ 
                backgroundColor: colors.deepSpaceGray,
                color: colors.offWhite 
              }}
            >
              {stat}
            </div>
          ))}
        </div>

        {/* Some more details Grid */}

        <div
        className="text-xs font-mono p-2 rounded text-center mb-4 flex flex-row justify-evenly"
        style={{ 
          backgroundColor: colors.deepSpaceGray,
          color: colors.cyberLime 
        }}
        >
            {
                topicsData.map((topic, index) => (
                    <div className=''>
                        <div className='text-sm font-light px-1 flex flex-col items-center gap-x-10 rounded-md' key={index} 
                        style={{ 
                            backgroundColor: colors.neonPurple,
                            color: colors.cyberLime 
                        }}
                        >
                            {topic}
                        </div>
                    </div>
                ))
            }
        </div>
  
        {/* Personality Code */}
        <div 
          className="text-xs font-mono p-2 rounded text-center"
          style={{ 
            backgroundColor: colors.deepSpaceGray,
            color: colors.cyberLime 
          }}
        >
          S+++ P++ T-DP D-Hard C+++
        </div>
      </div>
    );
  };

export default DashboardMockup;