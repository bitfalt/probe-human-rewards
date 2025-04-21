"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Coins, Calendar, CheckCircle2 } from 'lucide-react';

interface RedeemHistoryProps {
  history: Array<{
    id: string;
    survey_id: string;
    survey_title: string;
    amount: number;
    timestamp: string;
    status: 'pending' | 'completed' | 'failed';
  }>;
}

const RedeemHistory: React.FC<RedeemHistoryProps> = ({ history }) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-500';
      case 'pending':
        return 'text-yellow-500';
      case 'failed':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 size={16} className="text-green-500" />;
      case 'pending':
        return <div className="w-4 h-4 border-2 border-yellow-500 rounded-full animate-spin" />;
      case 'failed':
        return <div className="w-4 h-4 border-2 border-red-500 rounded-full" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Coins size={20} />
          Redeem History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {history.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <div className="font-medium">{item.survey_title}</div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={14} />
                  <span>{formatDate(item.timestamp)}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Coins size={16} className="text-yellow-500" />
                  <span className="font-medium">{item.amount} tokens</span>
                </div>
                <div className="flex items-center gap-1">
                  {getStatusIcon(item.status)}
                  <span className={`text-sm ${getStatusColor(item.status)}`}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RedeemHistory; 