"use client";

import type { ServiceItem } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MotionDiv } from '@/components/shared/MotionDiv';
import { fadeInItemVariants } from '@/components/shared/SectionWrapper';
import Image from 'next/image';

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <MotionDiv
      variants={fadeInItemVariants}
      className="h-full"
      whileHover={{ y: -8, boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="h-full flex flex-col overflow-hidden shadow-lg border-border hover:border-primary transition-colors duration-300">
        <div className="relative w-full h-48 bg-muted">
            <Image 
              src={`https://placehold.co/600x400.png`} // Placeholder
              alt={service.name} 
              layout="fill" 
              objectFit="cover"
              data-ai-hint={service.imageHint}
            />
        </div>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary/10 text-primary p-2 rounded-md">
              <service.icon className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl font-semibold">{service.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
        </CardContent>
      </Card>
    </MotionDiv>
  );
}
