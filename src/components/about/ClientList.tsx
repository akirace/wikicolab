"use client";

import { SectionWrapper, staggerContainerVariants, fadeInItemVariants } from '@/components/shared/SectionWrapper';
import { Card } from '@/components/ui/card';
import { MotionDiv } from '@/components/shared/MotionDiv';
import Image from 'next/image';

const clients = [
  { 
    name: "PT Bank Mandiri (Persero) Tbk", 
    logo: "https://img.aghatis.id/kntl/bG9jYWw6Ly8vbG9nb19iYW5rX21hbmRpcmkucG5n" 
  },
  { name: "PT Bank Negara Indonesia", logo: null },
  { name: "PT Wina Mitra Corpora", logo: null },
  { name: "PT Sifang System Indonesia", logo: null }
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
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto items-stretch"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {clients.map((client) => (
          <MotionDiv key={client.name} variants={fadeInItemVariants} className="flex">
            <Card className="w-full flex items-center justify-center text-center h-40 p-4 bg-white border border-border shadow-sm hover:shadow-lg transition-shadow">
              {client.logo ? (
                <div className="relative w-full h-full">
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    layout="fill" 
                    objectFit="contain"
                    className="p-2"
                  />
                </div>
              ) : (
                <p className="font-medium text-sm md:text-base text-card-foreground px-2">{client.name}</p>
              )}
            </Card>
          </MotionDiv>
        ))}
      </MotionDiv>
    </SectionWrapper>
  );
}
