import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { APP_NAME, TIMELINE_EVENTS } from '@/lib/constants';
import { Eye, Target, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import { BusinessTimeline } from '@/components/about/BusinessTimeline';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${APP_NAME}, our mission, vision, and journey in providing top-tier procurement services.`,
};

export default function AboutPage() {
  return (
    <div className="pt-20"> {/* Adjust for fixed navbar */}
      <SectionWrapper id="company-intro" className="bg-gradient-to-b from-background via-blue-50 to-teal-50 !py-24 md:!py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedText 
              text={`About ${APP_NAME}`}
              el="h1"
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            />
            <AnimatedText
              text="Founded in early 2024, Procurify Edge is dedicated to simplifying the complexities of procurement. We empower businesses by providing streamlined access to essential goods and services, fostering growth and operational excellence. Our team of experts is committed to building lasting partnerships based on trust, transparency, and mutual success."
              className="text-lg text-muted-foreground leading-relaxed"
              stagger={0.01}
              delay={0.3}
            />
          </div>
          <div>
            <Image 
              src="https://placehold.co/600x450.png" 
              alt="Procurify Edge Team" 
              width={600} 
              height={450}
              className="rounded-xl shadow-2xl object-cover"
              data-ai-hint="professional team"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="vision-mission" className="bg-background">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 border border-border rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-semibold">Our Vision</h2>
            </div>
            <AnimatedText
              text="To be the leading procurement partner, recognized for innovation, reliability, and unwavering commitment to client success across diverse industries."
              className="text-muted-foreground leading-relaxed"
              stagger={0.01}
            />
          </div>
          <div className="p-8 border border-border rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-10 w-10 text-accent" />
              <h2 className="text-3xl font-semibold">Our Mission</h2>
            </div>
            <AnimatedText
              text="To deliver exceptional procurement solutions by leveraging expertise, technology, and a client-centric approach, ensuring value, efficiency, and satisfaction in every transaction."
              className="text-muted-foreground leading-relaxed"
              stagger={0.01}
            />
          </div>
        </div>
      </SectionWrapper>

      <BusinessTimeline />
    </div>
  );
}
