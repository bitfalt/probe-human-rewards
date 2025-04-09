
import React from 'react';
import { useRouter } from 'next/router';
import PageContainer from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';

const SignIn = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/home');
  };

  return (
    <PageContainer hideNavigation>
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome to Probe</h1>
          <p className="text-probe-text-secondary mb-8">Complete surveys. Earn rewards.</p>
          
          <Button 
            onClick={handleSignIn} 
            className="w-full mb-4"
          >
            Sign In
          </Button>
          
          <p className="text-sm text-probe-text-secondary">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default SignIn;
