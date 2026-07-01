"use client";

import { motion } from "framer-motion";

interface BranchProps {
  className?: string;
  flip?: boolean;
}

export function BranchDecoration({ className = "", flip = false }: BranchProps) {
  return (
    <motion.svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none text-gold/40 ${flip ? "scale-x-[-1]" : ""} ${className}`}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <path
        d="M10 60 Q30 20 60 30 Q90 40 110 10"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M35 45 Q40 30 50 35"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      <ellipse cx="52" cy="32" rx="4" ry="2" fill="currentColor" opacity="0.5" />
      <ellipse cx="75" cy="25" rx="3" ry="1.5" fill="currentColor" opacity="0.4" />
      <ellipse cx="95" cy="15" rx="3.5" ry="1.8" fill="currentColor" opacity="0.5" />
    </motion.svg>
  );
}

export function LeafSeparator({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      className={`mx-auto text-gold/50 ${className}`}
      aria-hidden
    >
      <line x1="0" y1="10" x2="85" y2="10" stroke="currentColor" strokeWidth="0.5" />
      <path
        d="M95 10 Q100 2 105 10 Q100 18 95 10"
        fill="currentColor"
        opacity="0.6"
      />
      <line x1="115" y1="10" x2="200" y2="10" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

export function Monogram({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.div
      className={`font-script text-4xl text-gold md:text-5xl ${className}`}
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {text}
    </motion.div>
  );
}
