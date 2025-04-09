
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign } from 'lucide-react';

interface SurveyCardProps {
  title: string;
  description: string;
  reward: number;
  timeEstimate: string;
  progress?: number;
  onStart: () => void;
}

const SurveyCard: React.FC<SurveyCardProps> = ({
  title,
  description,
  reward,
  timeEstimate,
  progress = 0,
  onStart
}) => {
  return (
    <Card className="mb-4 overflow-hidden card-shadow">
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-probe-text-secondary text-sm mt-1">{description}</p>
        
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center text-probe-text-secondary">
            <Clock size={16} className="mr-1" />
            <span className="text-xs">{timeEstimate}</span>
          </div>
          <div className="flex items-center text-probe-secondary font-medium">
            <DollarSign size={16} className="mr-1" />
            <span>{reward} tokens</span>
          </div>
        </div>
        
        {progress > 0 && progress < 100 && (
          <div className="mt-3">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="bg-gray-50 p-4">
        <Button 
          onClick={onStart}
          className="w-full btn-primary"
        >
          {progress > 0 && progress < 100 ? 'Continue' : 'Start Survey'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SurveyCard;
