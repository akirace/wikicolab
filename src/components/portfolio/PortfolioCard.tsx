"use client";

import type { PortfolioItem } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { MotionDiv } from '@/components/shared/MotionDiv';
import { fadeInItemVariants } from '@/components/shared/SectionWrapper';
import { Badge } from '@/components/ui/badge';

interface PortfolioCardProps {
  project: PortfolioItem;
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <MotionDiv
      variants={fadeInItemVariants}
      className="h-full"
      whileHover={{ y: -8, boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="h-full flex flex-col overflow-hidden shadow-lg border-border hover:border-primary transition-colors duration-300">
        <div className="relative w-full h-56">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={project.imageHint}
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
          <Badge variant="secondary" className="w-fit mt-1">{project.category}</Badge>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
        </CardContent>
      </Card>
    </MotionDiv>
  );
}
