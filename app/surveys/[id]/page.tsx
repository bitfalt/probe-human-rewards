"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, Award, Shield, AlertCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import PageContainer from '@/app/components/layout/PageContainer';
import VerificationModal from '@/app/components/auth/VerificationModal';
import { motion } from 'framer-motion';

interface Survey {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  reward: number;
  questions: {
    id: number;
    question: string;
    type: string;
    options?: string[];
  }[];
}

// Mock survey data - in a real app, this would come from an API
const getSurveyById = (id: string): Survey => {
  return {
    id,
    title: id === '1' ? 'Digital Payment Habits' : 
           id === '2' ? 'Streaming Service Preferences' : 'Remote Work Experience',
    description: 'Help us understand how you use digital payment services and what features matter most to you.',
    timeEstimate: id === '1' ? '10 min' : id === '2' ? '15 min' : '20 min',
    reward: id === '1' ? 25 : id === '2' ? 30 : 40,
    questions: [
      {
        id: 1,
        question: 'How often do you use digital payment services?',
        type: 'multiple-choice',
        options: ['Daily', 'Several times a week', 'Once a week', 'Rarely', 'Never']
      },
      {
        id: 2,
        question: 'Which factors are most important when choosing a payment service?',
        type: 'checkbox',
        options: ['Security', 'Ease of use', 'Wide acceptance', 'Low fees', 'Rewards/cashback']
      },
      {
        id: 3,
        question: 'Describe your ideal digital payment experience',
        type: 'text'
      }
    ]
  };
};

export default function SurveyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    setSurvey(getSurveyById(id));
    
    // Check verification status
    const verificationStatus = localStorage.getItem('userVerified');
    setIsVerified(verificationStatus === 'true');
  }, [id]);

  const handleStartSurvey = () => {
    if (!isVerified) {
      setShowVerificationModal(true);
    } else {
      // In a real app, this would start the survey
      alert('Starting survey...');
    }
  };

  const handleVerified = () => {
    localStorage.setItem('userVerified', 'true');
    setIsVerified(true);
    setShowVerificationModal(false);
  };

  if (!survey) {
    return (
      <PageContainer>
        <div className="p-6 flex justify-center items-center h-screen">
          <p>Loading survey...</p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="p-6 max-w-4xl mx-auto">
        {/* Header with back button */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => router.back()}
            className="mb-4 pl-0 text-gray-600"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to surveys
          </Button>
          
          <h1 className="text-2xl font-bold text-gray-900">{survey.title}</h1>
          <p className="text-gray-600 mt-1 mb-4">{survey.description}</p>
          
          <div className="flex gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              <span>{survey.timeEstimate}</span>
            </div>
            <div className="flex items-center text-green-600 font-medium">
              <Award className="h-4 w-4 mr-1" />
              <span>${survey.reward}</span>
            </div>
          </div>

          {/* Survey information */}
          <motion.div 
            className="bg-white rounded-lg shadow p-5 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <h2 className="text-lg font-semibold mb-3">About this survey</h2>
            <p className="text-gray-600 mb-4">
              This survey contains {survey.questions.length} questions and should take about {survey.timeEstimate} to complete. 
              Your responses will help us improve our services.
            </p>
            
            {!isVerified && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4 flex items-start">
                <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-amber-800 font-medium mb-1">Verification required</p>
                  <p className="text-amber-700 text-sm">
                    You need to verify your humanity once before taking surveys. This helps ensure fair distribution of rewards.
                  </p>
                </div>
              </div>
            )}
            
            <div className="border-t border-gray-100 pt-4 mt-2">
              <h3 className="font-medium mb-2">What to expect:</h3>
              <ul className="space-y-1 text-gray-600 text-sm mb-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span> 
                  Multiple choice questions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span> 
                  Rating scales
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span> 
                  Open text responses
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Start survey button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              onClick={handleStartSurvey}
              className="w-full h-14 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium text-lg"
            >
              {isVerified ? (
                "Start Survey"
              ) : (
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Verify & Start Survey
                </div>
              )}
            </Button>
          </motion.div>
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