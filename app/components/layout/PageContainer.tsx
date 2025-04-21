"use client";

import React, { useEffect, useState } from 'react';
import BottomNavBar from './BottomNavBar';
import { motion } from 'framer-motion';

interface PageContainerProps {
  children: React.ReactNode;
  hideNavigation?: boolean;
  className?: string;
}

const PageContainer = ({ children, hideNavigation = false, className = '' }: PageContainerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Apply body styles for better mobile experience
    document.body.style.overscrollBehavior = 'none';
    
    return () => {
      document.body.style.overscrollBehavior = '';
    };
  }, []);

  return (
    <div className={`min-h-screen bg-background overflow-hidden ${className}`}>
      <motion.div
        className="min-h-screen pb-16 flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.main 
          className="flex-1 overflow-y-auto scrollbar-hide"
          initial={{ y: 10, opacity: 0 }}
          animate={{ 
            y: isLoaded ? 0 : 10,
            opacity: isLoaded ? 1 : 0
          }}
          transition={{ 
            duration: 0.4,
            delay: 0.1
          }}
        >
          {children}
        </motion.main>
        {!hideNavigation && <BottomNavBar />}
      </motion.div>
    </div>
  );
};

export default PageContainer;
