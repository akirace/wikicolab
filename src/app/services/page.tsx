
import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { DETAILED_SERVICES_DATA, SERVICE_ADVANTAGES, APP_NAME } from '@/lib/constants';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { MotionDiv } from '@/components/shared/MotionDiv';
import { staggerContainerVariants, fadeInItemVariants } from '@/components/shared/SectionWrapper';


export const metadata: Metadata = {
  title: 'Layanan Kami',
  description: `Jelajahi solusi lengkap dari ${APP_NAME}, mulai dari layanan operasional, dukungan teknis, hingga pengadaan barang.`,
};

export default function ServicesPage() {
  return (
    <div className="pt-20"> {/* Adjust for fixed navbar */}
      <SectionWrapper id="services-hero" className="!pt-24 !pb-16 md:!pt-32 md:!pb-20 bg-gradient-to-b from-background via-blue-50 to-teal-50">
        <div className="text-center">
          <AnimatedText 
            text="Layanan Kami"
            el="h1"
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          />
          <AnimatedText
            text={`Kami menyediakan solusi lengkap untuk mendukung operasional bisnis Anda, dari sumber daya manusia, perbaikan & service, hingga pengadaan barang.`}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            stagger={0.01}
            delay={0.3}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper id="our-services" className="bg-background">
        <MotionDiv 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {DETAILED_SERVICES_DATA.map((service) => (
            <MotionDiv key={service.category} variants={fadeInItemVariants} className="h-full">
              <Card className="flex flex-col h-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl font-semibold">{service.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                  <ul className="space-y-4">
                    {service.items.map((point) => (
                      <li key={point.name} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">{point.name}</h4>
                          {point.description && (
                            <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </SectionWrapper>
      
      <SectionWrapper id="advantages" className="bg-secondary/50">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Keunggulan Kami</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Alasan mengapa kami adalah mitra yang tepat untuk kebutuhan bisnis Anda.
            </p>
        </div>
        <MotionDiv 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-16 max-w-5xl mx-auto"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICE_ADVANTAGES.map((advantage) => (
            <MotionDiv key={advantage.title} variants={fadeInItemVariants} className="text-center p-6">
              <div className="mx-auto bg-card border border-border shadow-md text-primary rounded-full p-4 w-fit mb-4">
                <advantage.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </MotionDiv>
          ))}
        </MotionDiv>
      </SectionWrapper>
    </div>
  );
}
