import React from 'react';
import PageContainer from '@/app/components/layout/PageContainer';
import RewardsWallet from '@/app/components/rewards/RewardsWallet';

export default function RewardsPage() {
  return (
    <PageContainer>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-[#212121]">Your Rewards</h1>
        <p className="mb-4 text-[#757575]">View and claim your earned tokens.</p>
        <RewardsWallet />
      </div>
    </PageContainer>
  );
} 