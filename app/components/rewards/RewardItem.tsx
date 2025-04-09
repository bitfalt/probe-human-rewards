
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, X, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

type RewardStatus = 'completed' | 'pending' | 'failed';

interface RewardItemProps {
  title: string;
  amount: number;
  date: string;
  status: RewardStatus;
}

const RewardItem: React.FC<RewardItemProps> = ({ title, amount, date, status }) => {
  const statusConfig = {
    completed: {
      icon: Check,
      color: 'text-probe-secondary',
      bgColor: 'bg-green-50',
      label: 'Completed'
    },
    pending: {
      icon: Clock,
      color: 'text-probe-accent',
      bgColor: 'bg-amber-50',
      label: 'Pending'
    },
    failed: {
      icon: X,
      color: 'text-destructive',
      bgColor: 'bg-red-50',
      label: 'Failed'
    }
  };

  const { icon: StatusIcon, color, bgColor, label } = statusConfig[status];

  return (
    <Card className="mb-3">
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <h4 className="font-medium">{title}</h4>
          <span className="text-probe-text-secondary text-xs">{date}</span>
        </div>
        <div className="flex items-center">
          <div className={cn("flex items-center mr-3 px-2 py-1 rounded-full text-xs", color, bgColor)}>
            <StatusIcon size={12} className="mr-1" />
            <span>{label}</span>
          </div>
          <span className={cn("font-bold", 
            status === 'completed' ? 'text-probe-secondary' : 
            status === 'pending' ? 'text-probe-accent' : 'text-probe-text-secondary'
          )}>
            {status !== 'failed' && '+'}{amount} tokens
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RewardItem;
