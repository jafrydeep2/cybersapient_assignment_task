'use client';

import { motion } from 'framer-motion';
import { Check, Clock, Gift } from 'lucide-react';
import { Benefit } from '@/lib/data';

interface BenefitsSectionProps {
  benefits: Benefit[];
}

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-2"
      >
        <Gift className="w-5 h-5 text-purple-500" />
        <h2 className="text-xl font-semibold text-foreground">Available Benefits</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="bg-card border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-2xl">{benefit.icon}</div>
              {benefit.isClaimed ? (
                <div className="flex items-center space-x-1 text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                  <Check className="w-3 h-3" />
                  <span className="text-xs font-medium">Claimed</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1 text-orange-600 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-full">
                  <Clock className="w-3 h-3" />
                  <span className="text-xs font-medium">Active</span>
                </div>
              )}
            </div>

            <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {benefit.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full font-medium">
                {benefit.category}
              </span>
              
              {!benefit.isClaimed && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                >
                  {benefit.discount ? benefit.discount : 'Claim'}
                </motion.button>
              )}
            </div>

            {benefit.expiresAt && (
              <div className="mt-3 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                Expires: {new Date(benefit.expiresAt).toLocaleDateString()}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 