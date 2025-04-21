import React from 'react';
import PageContainer from '@/app/components/layout/PageContainer';
import SurveyList from '@/app/components/survey/SurveyList';

export default function SurveysPage() {
  return (
    <PageContainer>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-foreground">Available Surveys</h1>
        <p className="mb-4 text-muted-foreground">Complete surveys to earn rewards.</p>
        <SurveyList />
      </div>
    </PageContainer>
  );
} 