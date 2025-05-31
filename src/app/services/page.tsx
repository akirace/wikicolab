
import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SERVICES_DATA, APP_NAME } from '@/lib/constants'; // SERVICES_DATA might need update/rename
import { ServiceCard } from '@/components/services/ServiceCard';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { MotionDiv } from '@/components/shared/MotionDiv'; 
import { staggerContainerVariants } from '@/components/shared/SectionWrapper';


export const metadata: Metadata = {
  title: 'Fitur Kolaborasi', // Changed from 'Layanan Kami'
  description: `Jelajahi berbagai fitur dan area kolaborasi yang ditawarkan oleh ${APP_NAME} untuk mendukung proyek dan inisiatif Anda.`,
};

export default function ServicesPage() { // Consider renaming to FeaturesPage or similar
  return (
    <div className="pt-20"> {/* Adjust for fixed navbar */}
      <SectionWrapper id="services-hero" className="!pt-24 !pb-16 md:!pt-32 md:!pb-20 bg-gradient-to-b from-background via-blue-50 to-teal-50">
        <div className="text-center">
          <AnimatedText 
            text="Area & Fitur Kolaborasi Unggulan" // Changed title
            el="h1"
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          />
          <AnimatedText
            text={`Di ${APP_NAME}, kami menyediakan berbagai alat dan ruang untuk memfasilitasi kolaborasi yang efektif. Temukan bagaimana kami dapat mendukung proyek dan ide inovatif Anda.`} // Updated description
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            stagger={0.01}
            delay={0.3}
          />
        </div>
      </SectionWrapper>

      {SERVICES_DATA.map((serviceCategory, categoryIndex) => ( // SERVICES_DATA content should be reviewed or replaced
        <SectionWrapper 
          key={serviceCategory.category} 
          id={`feature-${serviceCategory.category.toLowerCase().replace(/\s+/g, '-')}`} // Changed id prefix
          className={categoryIndex % 2 === 0 ? 'bg-background' : 'bg-secondary/50'}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 tracking-tight">
            {serviceCategory.category} {/* Category names should be reviewed */}
          </h2>
          <MotionDiv 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {serviceCategory.items.map((service) => ( // Service items content should be reviewed
              <ServiceCard key={service.name} service={service} />
            ))}
          </MotionDiv>
        </SectionWrapper>
      ))}
    </div>
  );
}
