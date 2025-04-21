"use client";

import React from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Progress } from '@/app/components/ui/progress';
import { Coins, CheckCircle2, TrendingUp } from 'lucide-react';

interface UserStatsProps {
  user: {
    total_earned: number;
    completed_surveys: number;
    good_answers: number;
  };
  className?: string;
}

const UserStats: React.FC<UserStatsProps> = ({
  user,
  className = ''
}) => {
  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Coins size={16} />
              <span>Total Earned</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{user.total_earned} tokens</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 size={16} />
              <span>Completed Surveys</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{user.completed_surveys}</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Completion Rate</span>
              <span className="font-medium text-foreground">{user.good_answers}%</span>
            </div>
            <Progress value={user.good_answers} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserStats; 