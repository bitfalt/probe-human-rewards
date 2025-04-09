
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PageContainer from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import SurveyCard from '@/components/survey/SurveyCard';

// Mock survey data
const AVAILABLE_SURVEYS = [
  {
    id: '1',
    title: 'AI Preference Study',
    description: 'Help us understand preferences in AI assistant behavior and earn rewards.',
    reward: 50,
    timeEstimate: '5-10 min',
  },
  {
    id: '2',
    title: 'Product Feedback Survey',
    description: 'Share your thoughts on our latest product features.',
    reward: 75,
    timeEstimate: '10-15 min',
  },
  {
    id: '3',
    title: 'User Experience Research',
    description: 'Participate in our UX research to improve our platform.',
    reward: 100,
    timeEstimate: '15-20 min',
  },
  {
    id: '4',
    title: 'Market Research Survey',
    description: 'Answer questions about your consumer habits and preferences.',
    reward: 40,
    timeEstimate: '5 min',
  },
];

const IN_PROGRESS_SURVEYS = [
  {
    id: '5',
    title: 'Product Feedback Survey',
    description: 'Share your thoughts on our latest product features.',
    reward: 75,
    timeEstimate: '10-15 min',
    progress: 60,
  }
];

const COMPLETED_SURVEYS = [
  {
    id: '6',
    title: 'Initial Onboarding Survey',
    description: 'Tell us about your expectations and preferences.',
    reward: 25,
    timeEstimate: '3-5 min',
    progress: 100,
  }
];

export default function Surveys() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleStartSurvey = (id: string) => {
    console.log(`Starting survey ${id}`);
    // In a real app, this would navigate to the survey detail/start page
  };
  
  // Filter surveys based on search query
  const filterSurveys = (surveys: Array<{
    id: string;
    title: string;
    description: string;
    reward: number;
    timeEstimate: string;
    progress?: number;
  }>) => {
    if (!searchQuery) return surveys;
    
    return surveys.filter(survey => 
      survey.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      survey.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  
  const filteredAvailable = filterSurveys(AVAILABLE_SURVEYS);
  const filteredInProgress = filterSurveys(IN_PROGRESS_SURVEYS);
  const filteredCompleted = filterSurveys(COMPLETED_SURVEYS);
  
  return (
    <PageContainer>
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold mb-4">Surveys</h1>
        
        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search surveys..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Tabs */}
        <Tabs defaultValue="available" className="mb-6">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="available">Available</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="available" className="animate-slide-up">
            {filteredAvailable.length > 0 ? (
              filteredAvailable.map(survey => (
                <SurveyCard
                  key={survey.id}
                  title={survey.title}
                  description={survey.description}
                  reward={survey.reward}
                  timeEstimate={survey.timeEstimate}
                  onStart={() => handleStartSurvey(survey.id)}
                />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-probe-text-secondary">No available surveys found</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="in-progress" className="animate-slide-up">
            {filteredInProgress.length > 0 ? (
              filteredInProgress.map(survey => (
                <SurveyCard
                  key={survey.id}
                  title={survey.title}
                  description={survey.description}
                  reward={survey.reward}
                  timeEstimate={survey.timeEstimate}
                  progress={survey.progress}
                  onStart={() => handleStartSurvey(survey.id)}
                />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-probe-text-secondary">No surveys in progress</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="animate-slide-up">
            {filteredCompleted.length > 0 ? (
              filteredCompleted.map(survey => (
                <SurveyCard
                  key={survey.id}
                  title={survey.title}
                  description={survey.description}
                  reward={survey.reward}
                  timeEstimate={survey.timeEstimate}
                  progress={100} // All completed surveys have 100% progress
                  onStart={() => handleStartSurvey(survey.id)}
                />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-probe-text-secondary">No completed surveys</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}
