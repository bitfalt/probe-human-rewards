"use client";

import React from 'react';
import SurveyCard from './SurveyCard';

// Mock survey data
const mockSurveys = [
  {
    id: '1',
    title: 'User Experience Evaluation',
    description: 'Give feedback on an upcoming product interface',
    timeEstimate: '5 min',
    reward: '5 tokens',
    status: 'available',
    completionPercentage: 0,
  },
  {
    id: '2',
    title: 'AI Feedback Survey',
    description: 'Rate the quality of AI-generated responses',
    timeEstimate: '10 min',
    reward: '10 tokens',
    status: 'available',
    completionPercentage: 0,
  },
  {
    id: '3',
    title: 'Product Preference Survey',
    description: 'Choose between different product designs',
    timeEstimate: '3 min',
    reward: '3 tokens',
    status: 'in-progress',
    completionPercentage: 30,
  },
  {
    id: '4',
    title: 'Demographics Survey',
    description: 'Share anonymous demographic information',
    timeEstimate: '2 min',
    reward: '2 tokens',
    status: 'completed',
    completionPercentage: 100,
  }
];

const SurveyList = () => {
  return (
    <div className="space-y-4">
      {mockSurveys.map((survey) => (
        <SurveyCard key={survey.id} survey={survey} />
      ))}
    </div>
  );
};

export default SurveyList; 