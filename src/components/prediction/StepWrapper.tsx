import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface StepWrapperProps {
  stepKey: number;
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const variants = {
  enter: { x: 80, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -80, opacity: 0 },
};

const StepWrapper = ({ stepKey, children, title, subtitle }: StepWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stepKey}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-1 px-4 pb-4"
      >
        <h2 className="text-2xl font-display gold-text mb-1">{title}</h2>
        {subtitle && <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>}
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default StepWrapper;
