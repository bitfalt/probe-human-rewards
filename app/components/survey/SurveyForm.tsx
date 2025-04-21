"use client";

import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import AnswerType from './AnswerTypes';
import { Progress } from '@/app/components/ui/progress';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  answer_type: string;
  options?: string[];
}

interface SurveyFormProps {
  questions: Question[];
  onComplete: (answers: Record<string, string>) => void;
  initialAnswers?: Record<string, string>;
}

const SurveyForm: React.FC<SurveyFormProps> = ({ questions, onComplete, initialAnswers = {} }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(initialAnswers);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <CardTitle>Question {currentQuestionIndex + 1} of {questions.length}</CardTitle>
          <span className="text-sm text-gray-500">{Math.round(progress)}% complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">{currentQuestion.question}</h3>
          <AnswerType
            type={currentQuestion.answer_type}
            questionId={currentQuestion.id}
            options={currentQuestion.options}
            onAnswer={handleAnswer}
            value={answers[currentQuestion.id]}
          />
        </div>
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            className="flex items-center gap-2"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Complete' : 'Next'}
            <ArrowRight size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SurveyForm; 