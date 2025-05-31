"use client";

import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variants?: Variants;
  initial?: string | boolean;
  animate?: string | boolean;
  whileInView?: string | boolean;
  viewport?: object;
  transition?: object;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export function SectionWrapper({ 
  children, 
  className, 
  id,
  variants = defaultVariants,
  initial = "hidden",
  animate, // Typically not used with whileInView
  whileInView = "visible",
  viewport = { once: true, amount: 0.2 },
  transition 
}: SectionWrapperProps) {
  
  const motionProps = {
    initial: initial as string, // Framer Motion type issue with boolean
    ...(animate && { animate: animate as string }),
    ...(whileInView && { whileInView: whileInView as string }),
    variants,
    viewport,
    ...(transition && { transition }),
  };

  return (
    <motion.section
      id={id}
      className={cn("py-16 md:py-24 lg:py-32", className)}
      {...motionProps}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </motion.section>
  );
}

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const fadeInItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};
