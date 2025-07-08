
"use client";

import { SectionWrapper, staggerContainerVariants, fadeInItemVariants } from '@/components/shared/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { MotionDiv } from '@/components/shared/MotionDiv';

const clients = [
  "PT Bank Mandiri (Persero) Tbk",
  "PT Bank Negara Indonesia",
  "PT Wina Mitra Corpora",
  "PT Sifang System Indonesia"
];

export function ClientList() {
  return (
    <SectionWrapper id="clients" className="bg-secondary/50">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Klien Kami</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Kami bangga telah dipercaya oleh berbagai perusahaan dan institusi terkemuka.
        </p>
      </div>
      <MotionDiv
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {clients.map((client, index) => (
          <MotionDiv key={index} variants={fadeInItemVariants}>
            <Card className="flex items-center justify-center text-center h-full p-6 bg-card border border-border shadow-sm hover:shadow-lg transition-shadow">
              <p className="font-medium text-sm md:text-base text-card-foreground">{client}</p>
            </Card>
          </MotionDiv>
        ))}
      </MotionDiv>
    </SectionWrapper>
  );
}
