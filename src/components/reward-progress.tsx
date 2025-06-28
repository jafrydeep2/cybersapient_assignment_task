'use client';

import { motion } from 'framer-motion';
import { Trophy, Target, Award } from 'lucide-react';
import { RewardData } from '@/lib/data';

interface RewardProgressProps {
  rewardData: RewardData;
}

export function RewardProgress({ rewardData }: RewardProgressProps) {
  const progressPercentage = (rewardData.currentPoints / rewardData.nextMilestone) * 100;
  const radius = 54; // slightly smaller for padding
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card border rounded-xl p-6 shadow-sm"
    >
      <div className="flex items-center space-x-2 mb-6">
        <Trophy className="w-5 h-5 text-yellow-500" />
        <h2 className="text-xl font-semibold text-foreground">Reward Progress</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8">
        {/* Chart Section */}
        <div className="flex flex-col items-center justify-center flex-1 min-w-[220px]">
          <div className="relative w-44 h-44 flex items-center justify-center">
            <svg
              className="w-44 h-44"
              viewBox="0 0 120 120"
              style={{ display: 'block' }}
            >
              {/* Background circle */}
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#e5e7eb"
                strokeWidth="10"
                fill="transparent"
              />
              {/* Progress circle */}
              <motion.circle
                cx="60"
                cy="60"
                r={radius}
                stroke="url(#gradient)"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1)' }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-foreground">
                {rewardData.currentPoints}
              </div>
              <div className="text-xs text-muted-foreground">Points</div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 mt-6">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Points</span>
              <span className="font-medium text-foreground">{rewardData.totalPoints}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Next Milestone</span>
              <span className="font-medium text-foreground">{rewardData.nextMilestone}</span>
            </div>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="flex-1 w-full lg:w-auto flex flex-col justify-center lg:ml-8">
          <h3 className="font-semibold text-foreground mb-3 flex items-center">
            <Target className="w-4 h-4 mr-2 text-purple-500" />
            Milestones
          </h3>
          <div className="space-y-3">
            {rewardData.milestones.map((milestone, index) => {
              const achieved = milestone.achieved;
              return (
                <motion.div
                  key={milestone.points}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-lg border shadow-sm transition-colors duration-200 ${
                    achieved
                      ? 'bg-green-50 border-green-300 text-green-700'
                      : 'bg-white border-gray-200 text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Award className={`w-5 h-5 ${achieved ? 'text-green-500' : 'text-gray-400'}`} />
                    <span className={`text-base font-semibold ${achieved ? 'text-green-700' : 'text-gray-700'}`}>
                      {milestone.points} pts
                    </span>
                  </div>
                  <span className={`text-sm font-medium ${achieved ? 'text-green-700' : 'text-gray-700'}`}>
                    {milestone.reward}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 