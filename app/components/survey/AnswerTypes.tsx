import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Slider } from '@/app/components/ui/slider';

interface AnswerTypeProps {
  type: string;
  questionId: string;
  options?: string[];
  onAnswer: (answer: string) => void;
  value?: string;
}

const AnswerType: React.FC<AnswerTypeProps> = ({ type, questionId, options, onAnswer, value }) => {
  switch (type) {
    case 'text':
      return (
        <Textarea
          placeholder="Type your answer here..."
          value={value}
          onChange={(e) => onAnswer(e.target.value)}
          className="min-h-[100px]"
        />
      );
    case 'multiple_choice':
      return (
        <RadioGroup
          value={value}
          onValueChange={onAnswer}
          className="space-y-2"
        >
          {options?.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`${questionId}-${index}`} />
              <Label htmlFor={`${questionId}-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      );
    case 'rating':
      return (
        <div className="space-y-4">
          <Slider
            value={[parseInt(value || '0')]}
            onValueChange={(values) => onAnswer(values[0].toString())}
            max={5}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default AnswerType; 