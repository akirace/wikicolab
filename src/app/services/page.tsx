import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SERVICES_DATA, APP_NAME } from '@/lib/constants';
import { ServiceCard } from '@/components/services/ServiceCard';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { MotionDiv } from '@/components/shared/MotionDiv'; // Assuming MotionDiv is for Framer Motion
import { staggerContainerVariants } from '@/components/shared/SectionWrapper';


export const metadata: Metadata = {
  title: 'Our Services',
  description: `Explore the wide range of procurement and specialized services offered by ${APP_NAME}, including product sourcing, repairs, and staff outsourcing.`,
};

export default function ServicesPage() {
  return (
    <div className="pt-20"> {/* Adjust for fixed navbar */}
      <SectionWrapper id="services-hero" className="!pt-24 !pb-16 md:!pt-32 md:!pb-20 bg-gradient-to-b from-background via-blue-50 to-teal-50">
        <div className="text-center">
          <AnimatedText 
            text="Comprehensive Procurement Solutions"
            el="h1"
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          />
          <AnimatedText
            text={`At ${APP_NAME}, we offer a diverse array of services to meet all your procurement needs. From sourcing top-quality products to providing specialized operational support, we are your one-stop solution.`}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            stagger={0.01}
            delay={0.3}
          />
        </div>
      </SectionWrapper>

      {SERVICES_DATA.map((serviceCategory, categoryIndex) => (
        <SectionWrapper 
          key={serviceCategory.category} 
          id={`services-${serviceCategory.category.toLowerCase().replace(/\s+/g, '-')}`}
          className={categoryIndex % 2 === 0 ? 'bg-background' : 'bg-secondary/50'}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 tracking-tight">
            {serviceCategory.category}
          </h2>
          <MotionDiv 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {serviceCategory.items.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </MotionDiv>
        </SectionWrapper>
      ))}
    </div>
  );
}
