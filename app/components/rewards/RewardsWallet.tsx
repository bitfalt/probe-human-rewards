"use client";

import React, { useState } from 'react';
import { Coins, ArrowDown, ArrowUp, Copy, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Separator } from '@/app/components/ui/separator';
import { motion, AnimatePresence } from 'framer-motion';

// Mock transaction data
const transactions = [
  {
    id: '1',
    description: 'Completed UX Survey',
    amount: '+5 tokens',
    date: '2 days ago',
    type: 'credit'
  },
  {
    id: '2',
    description: 'Completed AI Feedback',
    amount: '+10 tokens',
    date: '3 days ago',
    type: 'credit'
  },
  {
    id: '3',
    description: 'Token Claim',
    amount: '-15 tokens',
    date: '5 days ago',
    type: 'debit'
  }
];

const RewardsWallet = () => {
  const availableTokens = 20;
  const mockWalletAddress = "0x71C...9E42";
  const [isCopied, setIsCopied] = useState(false);
  const [isClaimHovered, setIsClaimHovered] = useState(false);
  
  const handleCopyAddress = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border border-gray-200 overflow-hidden">
          <CardHeader className="pb-2 flex flex-row items-center justify-between bg-gradient-to-r from-[#1E88E5]/10 to-[#43A047]/10 pt-6">
            <CardTitle className="text-xl text-[#212121]">Token Balance</CardTitle>
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Coins className="h-7 w-7 text-[#43A047]" />
            </motion.div>
          </CardHeader>
          <CardContent className="pt-4">
            <motion.div 
              className="text-3xl font-bold text-[#212121] mb-1"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.5,
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
            >
              {availableTokens} tokens
            </motion.div>
            
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-[#757575]">Available to claim</p>
              <div className="flex items-center text-xs text-[#757575] bg-gray-100 rounded-full px-3 py-1">
                <span className="mr-1">{mockWalletAddress}</span>
                <motion.button
                  onClick={handleCopyAddress}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-1 text-[#1E88E5]"
                >
                  {isCopied ? <Check size={14} /> : <Copy size={14} />}
                </motion.button>
              </div>
            </div>
            
            <motion.div
              className="w-full"
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setIsClaimHovered(true)}
              onHoverEnd={() => setIsClaimHovered(false)}
              whileTap={{ scale: 0.97 }}
            >
              <Button className="w-full bg-[#43A047] hover:bg-[#388E3C] h-12 rounded-xl shadow-sm">
                <motion.div
                  className="flex items-center"
                  animate={isClaimHovered ? { x: [0, -4, 0] } : {}}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                >
                  <Coins className="mr-2 h-5 w-5" />
                  Claim Tokens
                </motion.div>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold mb-4 text-[#212121]">Transaction History</h2>
        <Card className="border border-gray-200 overflow-hidden">
          <CardContent className="p-0">
            {transactions.length > 0 ? (
              <div>
                {transactions.map((transaction, index) => (
                  <motion.div
                    key={transaction.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ backgroundColor: "#f9fafb" }}
                  >
                    <div className="p-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <motion.div 
                          className={`p-2 rounded-full mr-3 ${transaction.type === 'credit' ? 'bg-[#E8F5E9] text-[#43A047]' : 'bg-[#FFEBEE] text-[#E53935]'}`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {transaction.type === 'credit' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                        </motion.div>
                        <div>
                          <div className="font-medium text-[#212121]">{transaction.description}</div>
                          <div className="text-sm text-[#757575]">{transaction.date}</div>
                        </div>
                      </div>
                      <motion.div 
                        className={`font-semibold ${transaction.type === 'credit' ? 'text-[#43A047]' : 'text-[#E53935]'}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {transaction.amount}
                      </motion.div>
                    </div>
                    {index < transactions.length - 1 && <Separator />}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-[#757575]">
                No transactions yet.
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default RewardsWallet; 