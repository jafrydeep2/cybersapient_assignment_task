'use client';

import { motion } from 'framer-motion';
import { Crown, Star } from 'lucide-react';
import { User } from '@/lib/data';

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  const progressPercentage = (user.xp / user.xpToNextLevel) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center space-x-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            {user.name.charAt(0)}
          </div>
          <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-1 shadow-sm">
            <Crown className="w-3 h-3 text-yellow-800" />
          </div>
        </motion.div>
        
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-foreground">{user.name}</h2>
          <div className="flex items-center space-x-2 mt-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm text-muted-foreground font-medium">
              Level {user.level} • {user.xp} XP
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Progress to Level {user.level + 1}</span>
          <span className="font-medium text-foreground">{user.xp} / {user.xpToNextLevel} XP</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 shadow-inner">
          <motion.div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full shadow-sm"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
} 