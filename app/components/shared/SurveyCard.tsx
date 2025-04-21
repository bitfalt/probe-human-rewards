"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Clock, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

interface SurveyCardProps {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  reward: number;
  status?: 'available' | 'in-progress' | 'completed';
  completionPercentage?: number;
  onClick?: () => void;
  className?: string;
}

const SurveyCard: React.FC<SurveyCardProps> = ({
  id,
  title,
  description,
  timeEstimate,
  reward,
  status = 'available',
  completionPercentage = 0,
  onClick,
  className = ''
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 text-green-500';
      case 'in-progress':
        return 'bg-yellow-500/10 text-yellow-500';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className={className}
    >
      <Card 
        className="overflow-hidden border border-border shadow-sm hover:shadow transition-all duration-300 cursor-pointer"
        onClick={onClick}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-foreground">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{timeEstimate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Coins size={16} className="text-yellow-500" />
              <span className="font-medium">{reward} tokens</span>
            </div>
          </div>

          {status !== 'available' && (
            <div className="mt-4 w-full bg-muted rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${completionPercentage}%` }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className={`h-2 rounded-full ${status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SurveyCard; 