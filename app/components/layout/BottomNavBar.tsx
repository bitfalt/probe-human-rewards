"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, Award, Settings } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BottomNavBar = () => {
  const pathname = usePathname();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: FileText, label: 'Surveys', path: '/surveys' },
    { icon: Award, label: 'Rewards', path: '/rewards' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ];

  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-around items-center h-16 z-50 px-2"
    >
      <div className="absolute left-1/2 -translate-x-1/2 -top-6 bg-background rounded-full p-1 border border-border shadow-md">
        <Image 
          src="/Probe.svg" 
          width={32} 
          height={32} 
          alt="Probe Logo" 
          className="w-8 h-8"
        />
      </div>
      
      {navItems.map((item, index) => {
        const isActive = pathname === item.path;
        
        return (
          <Link
            key={item.path}
            href={item.path}
            className="relative w-full"
          >
            <motion.div
              className={cn(
                'flex flex-col items-center justify-center py-2 relative',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {isActive && (
                <motion.div
                  className="absolute -top-3 w-10 h-1 bg-primary rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className="relative">
                <item.icon 
                  size={22} 
                  className={cn(
                    'transition-colors duration-200',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )} 
                />
                {isActive && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                )}
              </div>
              <span className={cn(
                "text-xs mt-1 font-medium transition-colors duration-200",
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}>
                {item.label}
              </span>
            </motion.div>
          </Link>
        );
      })}
    </motion.nav>
  );
};

export default BottomNavBar;
