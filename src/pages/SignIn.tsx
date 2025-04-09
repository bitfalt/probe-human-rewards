
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Fingerprint, ArrowRight } from 'lucide-react';
import VerificationModal from '@/components/auth/VerificationModal';

const SignIn = () => {
  const navigate = useNavigate();
  const [showVerification, setShowVerification] = useState(false);

  const handleStart = () => {
    setShowVerification(true);
  };

  const handleVerificationComplete = () => {
    navigate('/home');
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Hero section */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 animate-fade-in">
        <div className="w-20 h-20 bg-probe-primary rounded-full flex items-center justify-center mb-8">
          <Fingerprint className="h-10 w-10 text-white" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2 text-center">Probe</h1>
        
        <p className="text-center text-lg mb-1 font-medium">
          Complete surveys. Earn rewards.
        </p>
        
        <p className="text-center text-probe-text-secondary mb-8">
          Verified by humanity.
        </p>
        
        <div className="max-w-xs space-y-6 w-full">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start mb-3">
              <div className="bg-probe-primary/10 p-2 rounded-full mr-3">
                <Fingerprint className="h-5 w-5 text-probe-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Unique Human Verification</h3>
                <p className="text-sm text-probe-text-secondary">One account per human, guaranteed by World ID.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-probe-secondary/10 p-2 rounded-full mr-3">
                <ArrowRight className="h-5 w-5 text-probe-secondary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Complete Tasks, Earn Rewards</h3>
                <p className="text-sm text-probe-text-secondary">Get compensated for every survey you complete.</p>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleStart} 
            className="w-full btn-primary"
          >
            Get Started
          </Button>
        </div>
      </div>
      
      <footer className="p-4 text-center text-sm text-probe-text-secondary">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </footer>
      
      <VerificationModal
        isOpen={showVerification}
        onClose={() => setShowVerification(false)}
        onComplete={handleVerificationComplete}
      />
    </div>
  );
};

export default SignIn;
