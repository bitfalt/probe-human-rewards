"use client";

import React, { useState } from 'react';
import { ArrowRight, Shield, Settings, User } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useRouter } from 'next/navigation';
import VerificationModal from '@/app/components/auth/VerificationModal';
import VerifiedBadge from '@/app/components/badges/VerifiedBadge';
import PageContainer from '@/app/components/layout/PageContainer';
import UserStats from '@/app/components/shared/UserStats';
import SurveyCard from '@/app/components/shared/SurveyCard';
import Image from 'next/image';

// Mock user data
const mockUser = {
  wallet_address: '0x1234...5678',
  username: 'John Doe',
  completed_surveys: 12,
  total_earned: 250,
  good_answers: 85,
  verified: true,
  last_login: new Date().toISOString(),
};

export default function HomeContent() {
  const router = useRouter();
  const [showVerificationModal, setShowVerificationModal] = useState(true);
  const [recentSurveys] = useState([
    { 
      id: '1', 
      title: 'Digital Payment Habits', 
      description: 'Share your experience with digital payments',
      reward: 25, 
      timeEstimate: '10 min',
      status: 'available' as const
    },
    { 
      id: '2', 
      title: 'Streaming Service Preferences', 
      description: 'Tell us about your streaming habits',
      reward: 30, 
      timeEstimate: '15 min',
      status: 'available' as const
    },
    { 
      id: '3', 
      title: 'Remote Work Experience', 
      description: 'Share your remote work insights',
      reward: 40, 
      timeEstimate: '20 min',
      status: 'available' as const
    }
  ]);

  const handleVerified = () => {
    setShowVerificationModal(false);
  };

  return (
    <PageContainer>
      <div className="p-4 md:p-6 max-w-4xl mx-auto">
        <div className="flex flex-col space-y-8">
          {/* Header section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image 
                  src="/Probe.svg" 
                  width={32} 
                  height={32} 
                  alt="Probe Logo" 
                  className="flex-shrink-0"
                />
                <h1 className="text-2xl font-bold text-foreground">Probe</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs bg-primary/10 text-primary border-none"
                >
                  <Shield className="h-3.5 w-3.5 mr-1" />
                  Verify
                </Button>
              </div>
            </div>
          </div>

          {/* User Profile Section */}
          <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">{mockUser.username}</h2>
            </div>
            <VerifiedBadge />
          </div>

          {/* User Stats */}
          <UserStats user={mockUser} />

          {/* Recent surveys section */}
          <div className="bg-card rounded-xl border border-border p-4 md:p-5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Available Surveys</h2>
                <p className="text-sm text-muted-foreground">Complete surveys to earn rewards</p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => router.push('/surveys')} 
                className="w-full md:w-auto"
              >
                View all surveys
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-3">
              {recentSurveys.map(survey => (
                <SurveyCard
                  key={survey.id}
                  {...survey}
                  onClick={() => router.push(`/surveys/${survey.id}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Show verification modal based on state */}
      {showVerificationModal && (
        <VerificationModal onVerified={handleVerified} />
      )}
    </PageContainer>
  );
} 