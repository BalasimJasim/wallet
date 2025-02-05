import React from 'react';
import { DailyPoints } from '../../types';

interface DailyPointsBlockProps {
  dailyPoints: DailyPoints;
}

export const DailyPointsBlock: React.FC<DailyPointsBlockProps> = ({ dailyPoints }) => {
  const calculatePoints = () => {
    const { season, dayOfSeason } = dailyPoints;
    
    // First day of the season gets 2 points
    if (dayOfSeason === 1) {
      return 2;
    }
    
    // Second day gets 3 points
    if (dayOfSeason === 2) {
      return 3;
    }
    
    // For subsequent days:
    // 100% of points from the day before the previous one
    // Plus 60% of points from the previous day
    const previousDayPoints = dailyPoints.points;
    const dayBeforePreviousPoints = previousDayPoints * 0.6;
    
    return Math.round(previousDayPoints + dayBeforePreviousPoints);
  };

  const formatPoints = (points: number) => {
    if (points >= 1000) {
      return `${(points / 1000).toFixed(1)}K`;
    }
    return points.toString();
  };

  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-[15px] font-semibold text-gray-900">Daily Points</h3>
        <div className="flex items-baseline">
          <span className="text-[24px] font-bold text-gray-900">{formatPoints(calculatePoints())}</span>
          <span className="text-[13px] text-gray-500 ml-2">points earned today</span>
        </div>
      </div>
    </div>
  );
}; 