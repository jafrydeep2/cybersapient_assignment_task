'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserProfile } from '@/components/user-profile';
import { BenefitsSection } from '@/components/benefits-section';
import { RewardProgress } from '@/components/reward-progress';
import { LoadingSkeleton } from '@/components/loading-skeleton';
import { mockUser, mockBenefits, mockRewardData } from '@/lib/data';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-background text-foreground">
          <LoadingSkeleton />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50 shadow-sm"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-sm">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  CRED Garage
                </h1>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <LoadingSkeleton />
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* User Profile */}
                <UserProfile user={mockUser} />

                {/* Benefits Section */}
                <BenefitsSection benefits={mockBenefits} />

                {/* Reward Progress */}
                <RewardProgress rewardData={mockRewardData} />

                {/* Footer */}
                <motion.footer
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-center py-8 text-muted-foreground border-t"
                >
                  <p className="text-sm">
                    Evaluation Task by <a href="https://jafry.netlify.app" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600">Jafry Mondol Deep</a>
                    <br />
                    <a href="https://github.com/jafrydeep2/cybersapient_assignment_task" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600">GitHub Repository</a>
                  </p>
                </motion.footer>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </ThemeProvider>
  );
}
