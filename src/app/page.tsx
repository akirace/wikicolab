import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Testimonials } from '@/components/home/Testimonials'; // Optional, can be added later

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Procurify Edge - Your trusted partner for procurement of goods and services. We offer reliable sourcing, expert support, and cost-effective solutions.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      {/* <Testimonials /> */}
    </>
  );
}
