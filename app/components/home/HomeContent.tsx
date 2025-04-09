"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, DollarSign, Calendar, Shield, Clock } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useRouter } from 'next/navigation';
import VerificationModal from '@/app/components/auth/VerificationModal';
import VerifiedBadge from '@/app/components/badges/VerifiedBadge';
import PageContainer from '@/app/components/layout/PageContainer';
import Image from 'next/image';

// QuickAccessCard component
const QuickAccessCard = ({ 
  icon, 
  title, 
  value, 
  info, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  info: string; 
  color: string;
}) => (
  <div className={`${color} rounded-xl p-5 shadow`}>
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="ml-2 font-medium text-gray-800">{title}</h3>
    </div>
    <div className="mt-1">
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-gray-600">{info}</p>
    </div>
  </div>
);

export default function HomeContent() {
  const router = useRouter();
  const [showVerificationModal, setShowVerificationModal] = useState(true);
  const [isVerified, setIsVerified] = useState(true);
  const [stats, setStats] = useState({
    availableSurveys: 12,
    totalEarned: 250,
    completionPercentage: 94
  });
  const [recentSurveys, setRecentSurveys] = useState([
    { id: 1, title: 'Digital Payment Habits', reward: 25, timeEstimate: '10 min' },
    { id: 2, title: 'Streaming Service Preferences', reward: 30, timeEstimate: '15 min' },
    { id: 3, title: 'Remote Work Experience', reward: 40, timeEstimate: '20 min' }
  ]);

  useEffect(() => {
    // Still check verification status, but show modal regardless
    const verificationStatus = localStorage.getItem('userVerified');
    setIsVerified(verificationStatus === 'true');
    setShowVerificationModal(true); // Always show verification modal
  }, []);

  const handleVerified = () => {
    localStorage.setItem('userVerified', 'true');
    setIsVerified(true);
    setShowVerificationModal(false);
  };

  const openVerificationModal = () => {
    setShowVerificationModal(true);
  };
  
  // Quick access cards data
  const quickLinks = [
    {
      title: 'Available Surveys',
      icon: <Calendar className="h-5 w-5 text-[#1E88E5]" />,
      description: `${stats.availableSurveys} surveys waiting for you`,
      action: 'Browse Surveys',
      onClick: () => router.push('/surveys'),
      color: 'bg-[#E3F2FD]'
    },
    {
      title: 'Total Earned',
      icon: <DollarSign className="h-5 w-5 text-[#43A047]" />,
      description: `You've earned $${stats.totalEarned.toFixed(2)}`,
      action: 'View Rewards',
      onClick: () => router.push('/rewards'),
      color: 'bg-[#E8F5E9]'
    },
    {
      title: 'Completion Rate',
      icon: <TrendingUp className="h-5 w-5 text-[#FFB300]" />,
      description: `You completed ${stats.completionPercentage}% of started surveys`,
      action: 'View History',
      onClick: () => router.push('/profile'),
      color: 'bg-[#FFF8E1]'
    }
  ];

  return (
    <PageContainer>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex flex-col space-y-6">
          {/* Header section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Image 
                  src="/Probe.svg" 
                  width={32} 
                  height={32} 
                  alt="Probe Logo" 
                  className="mr-1"
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
              {isVerified ? (
                <VerifiedBadge />
              ) : (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs bg-blue-50 text-blue-600 border-none"
                  onClick={openVerificationModal}
                >
                  <Shield className="h-3.5 w-3.5 mr-1" />
                  Verify Human
                </Button>
              )}
            </div>
            <p className="text-gray-600 mt-1">Here's what's waiting for you today</p>
          </div>

          {/* Quick access cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuickAccessCard 
              icon={<Calendar className="h-6 w-6 text-blue-500" />}
              title="Available Surveys"
              value={stats.availableSurveys.toString()}
              info="New surveys today"
              color="bg-blue-50"
            />
            <QuickAccessCard 
              icon={<DollarSign className="h-6 w-6 text-green-500" />}
              title="Total Earned"
              value={`$${stats.totalEarned.toFixed(2)}`}
              info="Lifetime earnings"
              color="bg-green-50"
            />
            <QuickAccessCard 
              icon={<TrendingUp className="h-6 w-6 text-purple-500" />}
              title="Completion Rate"
              value={`${stats.completionPercentage}%`}
              info="Above average"
              color="bg-purple-50"
            />
          </div>

          {/* Recent surveys section */}
          <div className="bg-white rounded-xl shadow p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Surveys</h2>
              <Button variant="outline" size="sm" onClick={() => router.push('/surveys')} className="text-sm">
                View all
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-3">
              {recentSurveys.map(survey => (
                <div 
                  key={survey.id} 
                  className="border border-gray-100 rounded-lg p-4 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer" 
                  onClick={() => router.push(`/surveys/${survey.id}`)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-900">{survey.title}</h3>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        <span>{survey.timeEstimate}</span>
                      </div>
                    </div>
                    <div className="bg-green-50 text-green-700 font-medium px-3 py-1 rounded-full text-sm">
                      ${survey.reward}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Verification Modal */}
      {showVerificationModal && (
        <VerificationModal
          onVerified={handleVerified}
          onClose={() => setShowVerificationModal(false)}
        />
      )}
    </PageContainer>
  );
} 