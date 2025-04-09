
import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wallet, ArrowUpRight } from 'lucide-react';
import RewardItem from '@/components/rewards/RewardItem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock reward transactions
const REWARD_TRANSACTIONS = [
  {
    id: '1',
    title: 'AI Preference Survey',
    amount: 50,
    date: 'Apr 8, 2025',
    status: 'completed' as const
  },
  {
    id: '2',
    title: 'Product Feedback Survey',
    amount: 75,
    date: 'Apr 5, 2025',
    status: 'pending' as const
  },
  {
    id: '3',
    title: 'Initial Onboarding Survey',
    amount: 25,
    date: 'Apr 1, 2025',
    status: 'completed' as const
  }
];

const Rewards = () => {
  return (
    <PageContainer>
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold mb-4">Rewards</h1>
        
        {/* Wallet card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Wallet className="h-6 w-6 text-probe-primary mr-2" />
                <h2 className="text-lg font-semibold">Your Balance</h2>
              </div>
              <Button variant="ghost" size="sm" className="text-probe-primary">
                <ArrowUpRight className="h-4 w-4 mr-1" /> Withdraw
              </Button>
            </div>
            
            <div className="mb-4">
              <div className="text-3xl font-bold mb-1">250 tokens</div>
              <p className="text-probe-text-secondary text-sm">Available to withdraw</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xl font-semibold">3</div>
                <p className="text-probe-text-secondary text-sm">Surveys completed</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xl font-semibold">75</div>
                <p className="text-probe-text-secondary text-sm">Pending tokens</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Transaction history */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Transaction History</h2>
          </div>
          
          <Tabs defaultValue="all">
            <TabsList className="w-full grid grid-cols-3 mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              {REWARD_TRANSACTIONS.map(transaction => (
                <RewardItem
                  key={transaction.id}
                  title={transaction.title}
                  amount={transaction.amount}
                  date={transaction.date}
                  status={transaction.status}
                />
              ))}
            </TabsContent>
            
            <TabsContent value="completed">
              {REWARD_TRANSACTIONS
                .filter(t => t.status === 'completed')
                .map(transaction => (
                  <RewardItem
                    key={transaction.id}
                    title={transaction.title}
                    amount={transaction.amount}
                    date={transaction.date}
                    status={transaction.status}
                  />
                ))}
            </TabsContent>
            
            <TabsContent value="pending">
              {REWARD_TRANSACTIONS
                .filter(t => t.status === 'pending')
                .map(transaction => (
                  <RewardItem
                    key={transaction.id}
                    title={transaction.title}
                    amount={transaction.amount}
                    date={transaction.date}
                    status={transaction.status}
                  />
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageContainer>
  );
};

export default Rewards;
