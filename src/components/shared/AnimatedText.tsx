"use client";

import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
}

const defaultAnimations: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function AnimatedText({
  text,
  el: Wrapper = 'p',
  className,
  stagger = 0.03,
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const letters = Array.from(text);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: i * delay },
    }),
  };

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      <Wrapper className="sr-only">{text}</Wrapper> {/* For SEO and accessibility */}
      <span aria-hidden>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={defaultAnimations}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
}
