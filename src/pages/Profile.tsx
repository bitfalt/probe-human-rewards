
import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Settings, Shield, Bell, HelpCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Profile = () => {
  return (
    <PageContainer>
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        
        {/* User card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Avatar className="h-16 w-16 mr-4">
                <AvatarImage src="" />
                <AvatarFallback className="bg-probe-primary text-white text-lg">JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-probe-text-secondary">Verified Human</p>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xl font-semibold">250</div>
                <p className="text-probe-text-secondary text-sm">Total tokens</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xl font-semibold">3</div>
                <p className="text-probe-text-secondary text-sm">Surveys completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Settings options */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Settings</h2>
          
          <Card>
            <CardContent className="p-0">
              <Button variant="ghost" className="w-full justify-start p-4 h-auto font-normal text-base">
                <Settings className="h-5 w-5 mr-3 text-probe-text-secondary" />
                Account Settings
              </Button>
              <Separator />
              <Button variant="ghost" className="w-full justify-start p-4 h-auto font-normal text-base">
                <Bell className="h-5 w-5 mr-3 text-probe-text-secondary" />
                Notifications
              </Button>
              <Separator />
              <Button variant="ghost" className="w-full justify-start p-4 h-auto font-normal text-base">
                <Shield className="h-5 w-5 mr-3 text-probe-text-secondary" />
                Privacy & Security
              </Button>
              <Separator />
              <Button variant="ghost" className="w-full justify-start p-4 h-auto font-normal text-base">
                <HelpCircle className="h-5 w-5 mr-3 text-probe-text-secondary" />
                Help & Support
              </Button>
            </CardContent>
          </Card>
          
          <Button variant="outline" className="w-full mt-4 text-destructive border-destructive/20">
            Sign Out
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Profile;
