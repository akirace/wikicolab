"use client";

import { WHY_CHOOSE_US_POINTS } from '@/lib/constants';
import { SectionWrapper, staggerContainerVariants, fadeInItemVariants } from '@/components/shared/SectionWrapper';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function WhyChooseUs() {
  return (
    <SectionWrapper id="why-choose-us" className="bg-secondary/50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image 
            src="https://placehold.co/600x500.png" 
            alt="Team collaborating on procurement strategy" 
            width={600} 
            height={500}
            className="rounded-lg shadow-2xl object-cover"
            data-ai-hint="team meeting"
          />
        </motion.div>
        <div>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Procurify Edge?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience the difference with our client-centric approach and commitment to excellence.
            </p>
          </div>
          <motion.ul 
            className="space-y-6"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {WHY_CHOOSE_US_POINTS.map((point) => (
              <motion.li key={point.title} className="flex items-start gap-4" variants={fadeInItemVariants}>
                <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full p-2 mt-1">
                  <point.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
