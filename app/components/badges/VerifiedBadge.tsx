"use client";

import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VerifiedBadge() {
  return (
    <motion.div 
      className="inline-flex items-center gap-1.5 py-1 px-2.5 bg-green-50 text-green-700 rounded-full text-xs font-medium"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 500,
        damping: 25
      }}
      whileHover={{ scale: 1.05 }}
    >
      <Shield className="h-3.5 w-3.5" />
      <span>Verified Human</span>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <CheckCircle className="h-3.5 w-3.5 text-green-500" />
      </motion.div>
    </motion.div>
  );
} 