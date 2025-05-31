
"use client";

import { TIMELINE_EVENTS } from '@/lib/constants';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

const timelineItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export function BusinessTimeline() {
  return (
    <SectionWrapper id="timeline" className="bg-secondary/50">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Perjalanan Kami</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Menelusuri tonggak sejarah kami dari awal hingga pertumbuhan kami saat ini.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-border rounded-full -translate-x-1/2 hidden md:block"></div>
        
        {TIMELINE_EVENTS.map((event, index) => (
          <motion.div
            key={index}
            className="mb-12 md:mb-16 flex md:items-center w-full"
            custom={index}
            variants={timelineItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:ml-auto'}`}>
              <div className="p-6 bg-card rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <CalendarDays className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold">{event.year}</h3>
                </div>
                <h4 className="text-xl font-medium text-foreground mb-2">{event.title}</h4>
                <p className="text-muted-foreground text-sm">{event.description}</p>
              </div>
            </div>
            {/* Circle on the line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-5 h-5 bg-primary rounded-full border-4 border-background shadow-md"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

    