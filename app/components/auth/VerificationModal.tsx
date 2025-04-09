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
    <DialogOverlay />
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
  onClose: () => void;
}

const VerificationModal = ({ onVerified, onClose }: VerificationModalProps) => {
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
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto rounded-xl bg-white p-0 overflow-hidden border-none shadow-xl">
        <DialogHeader className="p-6 pb-2">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-semibold text-[#212121]">Verify Your Humanity</DialogTitle>
          </div>
          <DialogDescription className="text-[#757575]">
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
                  className="w-28 h-28 bg-[#1E88E5]/10 rounded-full mb-5 flex items-center justify-center"
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
                      repeatType: "loop"
                    }}
                  >
                    <Image 
                      src="/Probe.svg" 
                      width={56} 
                      height={56} 
                      alt="Probe Logo" 
                      className="drop-shadow-md"
                    />
                  </motion.div>
                </motion.div>
                <motion.div className="space-y-4 w-full">
                  <motion.p 
                    className="text-center mb-2 text-[#212121]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    This is a one-time verification to ensure:
                  </motion.p>
                  <motion.ul 
                    className="space-y-2 text-sm text-[#757575] mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Each person can only participate once
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Your survey responses are reliable
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Rewards are distributed fairly
                    </li>
                  </motion.ul>
                  <motion.div 
                    className="w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={simulateVerification}
                      className="w-full bg-[#1E88E5] hover:bg-[#1976D2] text-white h-12 rounded-xl shadow transition-all"
                    >
                      Verify with World ID
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ) : isVerifying ? (
            <motion.div 
              className="flex flex-col items-center justify-center h-52 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              key="verifying"
            >
              <div className="relative w-16 h-16">
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full rounded-full border-t-2 border-b-2 border-[#1E88E5]"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                <motion.div 
                  className="absolute top-1 left-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full border-t-2 border-r-2 border-[#1E88E5]/60"
                  animate={{ rotate: -360 }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
              </div>
              <motion.p 
                className="mt-6 text-[#212121] font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Verifying your humanity...
              </motion.p>
              <motion.p 
                className="mt-2 text-sm text-[#757575]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                This will only take a moment
              </motion.p>
            </motion.div>
          ) : (
            <motion.div 
              className="flex flex-col items-center justify-center h-60 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              key="complete"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
              >
                <div className="rounded-full h-16 w-16 bg-[#43A047] flex items-center justify-center text-white">
                  <CheckCircle size={30} />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="text-center"
              >
                <p className="mt-5 text-lg font-semibold text-[#212121]">Verification successful!</p>
                <p className="mt-1 text-[#757575]">You're now ready to explore surveys</p>
                <p className="mt-4 text-sm text-[#757575]">Your unique human verification is now complete. You can access all features of the app.</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default VerificationModal;
