
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2 } from 'lucide-react';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const VerificationModal: React.FC<VerificationModalProps> = ({
  isOpen,
  onClose,
  onComplete
}) => {
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleVerify = () => {
    setVerifying(true);
    
    // Simulate World ID verification
    setTimeout(() => {
      setVerifying(false);
      setVerified(true);
      
      // Complete the verification process
      setTimeout(() => {
        onComplete();
      }, 1500);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Verify your humanity</DialogTitle>
          <DialogDescription className="text-center">
            Probe uses World ID to verify that you're a unique human.
            No personal data is collected.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center py-6">
          {!verified ? (
            <>
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <img 
                  src="https://worldcoin.org/icons/logo-gradient.svg" 
                  alt="World ID" 
                  className="w-12 h-12"
                />
              </div>
              <p className="text-sm text-center mb-6">
                World ID verification ensures that each human can only create one account,
                preventing fraud and ensuring fair reward distribution.
              </p>
              <Button
                onClick={handleVerify}
                className="btn-primary w-full"
                disabled={verifying}
              >
                {verifying ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  'Verify with World ID'
                )}
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <CheckCircle className="h-16 w-16 text-probe-secondary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Verification Complete</h3>
              <p className="text-center text-probe-text-secondary mb-4">
                Your humanity has been verified. Welcome to Probe!
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VerificationModal;
