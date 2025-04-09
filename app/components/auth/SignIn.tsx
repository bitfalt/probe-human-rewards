"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import PageContainer from '@/app/components/layout/PageContainer';
import { Button } from '@/app/components/ui/button';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';
import Image from 'next/image';

const SignIn = () => {
  const router = useRouter();

  const handleWalletSignIn = () => {
    // In a real app, this would authenticate with Wallet World ID
    // For now, we'll just redirect to home
    router.push('/home');
  };

  return (
    <PageContainer hideNavigation className="bg-gradient-to-b from-[#1E88E5]/10 to-[#F9FAFB]">
      <div className="flex flex-col items-center justify-center min-h-[90vh] px-6">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo and branding */}
          <div className="flex flex-col items-center mb-10">
            <motion.div 
              className="w-24 h-24 flex items-center justify-center mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }}
            >
              <Image 
                src="/Probe.svg" 
                width={96} 
                height={96} 
                alt="Probe Logo"
                priority
                className="drop-shadow-lg"
              />
            </motion.div>
            <motion.h1 
              className="text-3xl font-bold mb-2 text-[#212121] text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Welcome to Probe
            </motion.h1>
            <motion.p 
              className="text-[#757575] mb-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Complete surveys. Earn rewards.
            </motion.p>
            <motion.div
              className="w-16 h-1 bg-[#1E88E5] rounded-full mt-1 mb-4"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.p 
              className="text-sm text-[#757575] mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              One human identity, one account.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button 
              onClick={handleWalletSignIn} 
              className="w-full mb-6 bg-[#1E88E5] hover:bg-[#1976D2] text-white h-14 rounded-xl text-lg font-medium shadow-md hover:shadow-xl transition-all"
            >
              <motion.div 
                className="flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Wallet className="mr-2 h-5 w-5" />
                Connect with World ID
              </motion.div>
            </Button>
            
            <p className="text-sm text-[#757575] text-center px-4">
              By signing in, you agree to our <span className="text-[#1E88E5]">Terms of Service</span> and <span className="text-[#1E88E5]">Privacy Policy</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </PageContainer>
  );
};

export default SignIn;
