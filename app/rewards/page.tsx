"use client";

import React from 'react';
import PageContainer from '@/app/components/layout/PageContainer';
import RewardsWallet from '@/app/components/rewards/RewardsWallet';
import { motion } from 'framer-motion';

export default function RewardsPage() {
  return (
    <PageContainer>
      <div className="p-4 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2 text-foreground">Rewards Dashboard</h1>
          <p className="text-muted-foreground mb-6">Track your rewards and token balance</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <RewardsWallet />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
          </motion.div>
        </div>
      </div>
    </PageContainer>
  );
} 