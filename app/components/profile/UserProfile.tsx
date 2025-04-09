"use client";

import React from 'react';
import { User, Award, Settings, LogOut } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Separator } from '@/app/components/ui/separator';

const UserProfile = () => {
  const user = {
    username: 'JohnDoe',
    joinedDate: 'Joined January 2023',
    surveysCompleted: 12,
    totalEarned: '45 tokens'
  };

  return (
    <div className="space-y-6">
      <Card className="border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-[#1E88E5] rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
              {user.username.substring(0, 1)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#212121]">{user.username}</h2>
              <p className="text-sm text-[#757575]">{user.joinedDate}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-[#757575] mb-1">Surveys Completed</div>
              <div className="text-xl font-bold text-[#212121]">{user.surveysCompleted}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-[#757575] mb-1">Total Earned</div>
              <div className="text-xl font-bold text-[#43A047]">{user.totalEarned}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-gray-200">
        <CardContent className="p-0">
          <ProfileMenuItem 
            icon={<User size={18} />} 
            title="Account Information"
            description="Update your personal details"
          />
          <Separator />
          <ProfileMenuItem 
            icon={<Award size={18} />} 
            title="Achievements"
            description="View your survey achievements"
          />
          <Separator />
          <ProfileMenuItem 
            icon={<Settings size={18} />} 
            title="Settings"
            description="Configure app preferences"
          />
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full border-[#E53935] text-[#E53935] hover:bg-[#FFEBEE] hover:text-[#E53935]">
        <LogOut size={16} className="mr-2" />
        Sign Out
      </Button>
    </div>
  );
};

const ProfileMenuItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="p-4 flex items-center cursor-pointer hover:bg-gray-50">
      <div className="p-2 bg-gray-100 rounded-full mr-3">
        {icon}
      </div>
      <div>
        <div className="font-medium text-[#212121]">{title}</div>
        <div className="text-sm text-[#757575]">{description}</div>
      </div>
    </div>
  );
};

export default UserProfile; 