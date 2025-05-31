
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Testimonials } from '@/components/home/Testimonials'; // Optional, can be added later

export const metadata: Metadata = {
  title: 'Beranda',
  description: 'Selamat datang di Procurify Edge - Mitra tepercaya Anda untuk pengadaan barang dan jasa. Kami menawarkan sumber yang andal, dukungan ahli, dan solusi hemat biaya.',
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

    