"use client";

import React from 'react';
import { ArrowRight, Clock, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export interface SurveyCardProps {
  survey: {
    id: string;
    title: string;
    description: string;
    timeEstimate: string;
    reward: string;
    status: string;
    completionPercentage: number;
  };
}

const SurveyCard = ({ survey }: SurveyCardProps) => {
  const { id, title, description, timeEstimate, reward, status, completionPercentage } = survey;
  const router = useRouter();

  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 dark:bg-green-600';
      case 'in-progress':
        return 'bg-yellow-500 dark:bg-yellow-600';
      default:
        return 'bg-blue-500 dark:bg-blue-600';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Available';
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'completed':
        return 'View Results';
      case 'in-progress':
        return 'Continue';
      default:
        return 'Start Survey';
    }
  };

  const StatusIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 size={14} />;
      case 'in-progress':
        return <Sparkles size={14} />;
      default:
        return <Star size={14} />;
    }
  };

  const handleClick = () => {
    router.push(`/surveys/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="w-full"
    >
      <Card className="overflow-hidden border-border hover:shadow transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center mb-2">
            <CardTitle className="text-foreground text-lg">{title}</CardTitle>
            <motion.span 
              className={`text-xs px-2 py-1 rounded-full text-white flex items-center gap-1 ${getStatusColor()}`}
              whileHover={{ scale: 1.05 }}
            >
              <StatusIcon />
              <span>{getStatusText()}</span>
            </motion.span>
          </div>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{timeEstimate}</span>
            </div>
            <motion.div 
              className="font-medium text-green-500 dark:text-green-400 flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {reward}
            </motion.div>
          </div>

          {status !== 'available' && (
            <div className="mt-4 w-full bg-muted rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${completionPercentage}%` }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className={`h-2 rounded-full ${status === 'completed' ? 'bg-green-500 dark:bg-green-600' : 'bg-yellow-500 dark:bg-yellow-600'}`}
              />
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-2">
          <motion.div 
            className="w-full" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              onClick={handleClick}
              className={`w-full flex justify-between items-center h-11 rounded-lg 
                ${status === 'completed' ? 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700' : 
                  status === 'in-progress' ? 'bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-foreground' : 
                  'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'}`}
            >
              <span>{getButtonText()}</span>
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SurveyCard;
