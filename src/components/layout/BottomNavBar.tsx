
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, FileText, Award, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNavBar = () => {
  const router = useRouter();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: FileText, label: 'Surveys', path: '/surveys' },
    { icon: Award, label: 'Rewards', path: '/rewards' },
    { icon: User, label: 'Profile', path: '/profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 z-50">
      {navItems.map((item) => {
        const isActive = router.pathname === item.path;
        
        return (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              'flex flex-col items-center justify-center w-full h-full',
              isActive ? 'text-probe-primary' : 'text-probe-text-secondary'
            )}
          >
            <item.icon size={20} className={cn(
              isActive ? 'text-probe-primary' : 'text-probe-text-secondary'
            )} />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;
