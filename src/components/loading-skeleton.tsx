'use client';

import { motion } from 'framer-motion';

export function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      {/* User Profile Skeleton */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-card border rounded-xl p-6 shadow-sm"
      >
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse" />
          </div>
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
        </div>
      </motion.div>

      {/* Benefits Grid Skeleton */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border rounded-xl p-4 shadow-sm"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="w-16 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="w-20 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
                <div className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reward Progress Skeleton */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-card border rounded-xl p-6 shadow-sm"
      >
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-40 animate-pulse" />
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
          <div className="flex-1 w-full lg:w-auto">
            <div className="text-center mb-4">
              <div className="w-40 h-40 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mx-auto" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse" />
              </div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-28 animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse" />
              </div>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-3 animate-pulse" />
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-12 animate-pulse" />
                  </div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 