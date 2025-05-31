"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CORE_SERVICES_OVERVIEW } from '@/lib/constants';
import { SectionWrapper, staggerContainerVariants, fadeInItemVariants } from '@/components/shared/SectionWrapper';
import { motion } from 'framer-motion';

export function ServicesOverview() {
  return (
    <SectionWrapper id="services-overview" className="bg-background">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Services</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We provide a comprehensive suite of procurement solutions designed to meet your business needs efficiently and effectively.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {CORE_SERVICES_OVERVIEW.map((service) => (
          <motion.div key={service.name} variants={fadeInItemVariants}>
            <Card className="h-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit mb-4">
                  <service.icon className="h-10 w-10" />
                </div>
                <CardTitle className="text-2xl font-semibold">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
