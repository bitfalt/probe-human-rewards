"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, Award, User } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BottomNavBar = () => {
  const pathname = usePathname();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: FileText, label: 'Surveys', path: '/surveys' },
    { icon: Award, label: 'Rewards', path: '/rewards' },
    { icon: User, label: 'Profile', path: '/profile' }
  ];

  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 z-50 px-2"
    >
      <div className="absolute left-1/2 -translate-x-1/2 -top-6 bg-white rounded-full p-1 border border-gray-200 shadow-md">
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
                isActive ? 'text-[#1E88E5]' : 'text-[#757575]'
              )}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {isActive && (
                <motion.div
                  className="absolute -top-3 w-10 h-1 bg-[#1E88E5] rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className="relative">
                <item.icon 
                  size={22} 
                  className={cn(
                    'transition-colors duration-200',
                    isActive ? 'text-[#1E88E5]' : 'text-[#757575]'
                  )} 
                />
                {isActive && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-[#1E88E5] rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                )}
              </div>
              <span className={cn(
                "text-xs mt-1 font-medium transition-colors duration-200",
                isActive ? 'text-[#1E88E5]' : 'text-[#757575]'
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
