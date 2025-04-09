
import React from 'react';
import { useRouter } from 'next/router';
import PageContainer from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Award, ArrowRight } from 'lucide-react';
import SurveyCard from '@/components/survey/SurveyCard';

export default function Home() {
  const router = useRouter();
  
  const handleStartSurvey = () => {
    router.push('/surveys');
  };
  
  return (
    <PageContainer>
      <div className="animate-fade-in">
        <div className="flex flex-col items-center mb-6">
          <div className="text-center mb-2">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-probe-text-secondary">Ready to earn some rewards?</p>
          </div>
          <div className="bg-probe-primary/10 py-2 px-6 rounded-full inline-block">
            <span className="font-semibold text-probe-primary">250 tokens</span>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="card-shadow">
            <CardContent className="p-4 flex flex-col items-center">
              <FileText className="h-8 w-8 text-probe-primary mb-2" />
              <h3 className="font-medium text-center">Available Surveys</h3>
              <span className="text-xl font-bold">5</span>
              <Button 
                variant="link" 
                onClick={() => router.push('/surveys')}
                className="text-probe-primary mt-2 p-0 h-auto"
              >
                View all
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-shadow">
            <CardContent className="p-4 flex flex-col items-center">
              <Award className="h-8 w-8 text-probe-secondary mb-2" />
              <h3 className="font-medium text-center">Earned Rewards</h3>
              <span className="text-xl font-bold">250</span>
              <Button 
                variant="link" 
                onClick={() => router.push('/rewards')}
                className="text-probe-secondary mt-2 p-0 h-auto"
              >
                View details
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Featured survey */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Featured Survey</h2>
            <Button 
              variant="link" 
              onClick={() => router.push('/surveys')}
              className="text-probe-primary p-0 h-auto flex items-center"
            >
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <SurveyCard
            title="AI Preference Study"
            description="Help us understand preferences in AI assistant behavior and earn rewards."
            reward={50}
            timeEstimate="5-10 min"
            onStart={handleStartSurvey}
          />
        </div>

        {/* In progress */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">In Progress</h2>
          </div>
          
          <SurveyCard
            title="Product Feedback Survey"
            description="Share your thoughts on our latest product features."
            reward={75}
            timeEstimate="10-15 min"
            progress={60}
            onStart={handleStartSurvey}
          />
        </div>
      </div>
    </PageContainer>
  );
}
