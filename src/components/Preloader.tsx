"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Monogram } from "@/components/decorations/SvgDecorations";
import { weddingConfig } from "@/config/wedding";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Monogram text={weddingConfig.couple.monogram} />
          <motion.div
            className="mt-6 h-px w-24 bg-gold/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
          <motion.p
            className="mt-4 font-heading text-sm tracking-[0.3em] text-body/60 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {weddingConfig.couple.displayNames}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
