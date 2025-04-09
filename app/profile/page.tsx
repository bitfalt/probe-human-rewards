import React from 'react';
import PageContainer from '@/app/components/layout/PageContainer';
import UserProfile from '@/app/components/profile/UserProfile';

export default function ProfilePage() {
  return (
    <PageContainer>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-[#212121]">Your Profile</h1>
        <p className="mb-4 text-[#757575]">Manage your account and settings.</p>
        <UserProfile />
      </div>
    </PageContainer>
  );
} 