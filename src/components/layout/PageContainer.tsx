
import React from 'react';
import BottomNavBar from './BottomNavBar';

interface PageContainerProps {
  children: React.ReactNode;
  hideNavigation?: boolean;
  className?: string;
}

const PageContainer = ({ children, hideNavigation = false, className = '' }: PageContainerProps) => {
  return (
    <div className="h-screen bg-probe-background overflow-y-auto">
      <div className={`page-container ${className}`}>
        {children}
      </div>
      {!hideNavigation && <BottomNavBar />}
    </div>
  );
};

export default PageContainer;
