"use client";

import React, { useState } from 'react';
import { X, CheckCircle, Shield } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import {
  Dialog,
  DialogContent as BaseDialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogPortal,
  DialogOverlay,
} from '@/app/components/ui/dialog';
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/app/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Custom DialogContent without the close button
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay className="bg-black/80" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

export interface VerificationModalProps {
  onVerified: () => void;
}

const VerificationModal = ({ onVerified }: VerificationModalProps) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const simulateVerification = () => {
    setIsVerifying(true);
    // In a real app, this would be replaced with World ID verification
    setTimeout(() => {
      setIsVerifying(false);
      setIsComplete(true);
      setTimeout(() => {
        onVerified();
      }, 1500);
    }, 2000);
  };

  return (
    <Dialog open={true}>
      <DialogContent className="max-w-sm mx-auto rounded-xl p-0 overflow-hidden border border-border bg-background">
        <DialogHeader className="p-6 pb-2">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-semibold text-foreground">Verify Your Humanity</DialogTitle>
          </div>
          <DialogDescription className="text-muted-foreground">
            To access surveys and earn rewards, we need to verify you're human.
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!isVerifying && !isComplete ? (
            <motion.div 
              className="p-6 pt-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center py-4">
                <motion.div 
                  className="w-28 h-28 bg-primary/10 dark:bg-primary/20 rounded-full mb-5 flex items-center justify-center"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.03, 1],
                      rotate: [0, -5, 0, 5, 0]
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                  >
                    <Shield className="h-12 w-12 text-primary" />
                  </motion.div>
                </motion.div>
                <Button 
                  onClick={simulateVerification}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Start Verification
                </Button>
              </div>
            </motion.div>
          ) : isVerifying ? (
            <motion.div 
              className="p-6 pt-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center py-4">
                <motion.div 
                  className="w-28 h-28 bg-primary/10 dark:bg-primary/20 rounded-full mb-5 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Shield className="h-12 w-12 text-primary" />
                </motion.div>
                <p className="text-foreground font-medium mb-2">Verifying...</p>
                <p className="text-muted-foreground text-sm text-center">
                  Please wait while we verify your humanity
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="p-6 pt-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center py-4">
                <motion.div 
                  className="w-28 h-28 bg-green-100 dark:bg-green-900 rounded-full mb-5 flex items-center justify-center"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                >
                  <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                </motion.div>
                <p className="text-foreground font-medium mb-2">Verification Complete!</p>
                <p className="text-muted-foreground text-sm text-center">
                  You have been successfully verified
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default VerificationModal;
