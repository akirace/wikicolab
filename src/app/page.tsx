
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesOverview } from '@/components/home/ServicesOverview'; // Assuming this might be repurposed or renamed later
import { WhyChooseUs } from '@/components/home/WhyChooseUs'; // Assuming this might be repurposed or renamed later
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Beranda',
  description: `Selamat datang di ${APP_NAME} - Platform kolaborasi Anda untuk berbagi pengetahuan dan memajukan Nusantara.`,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* The following sections might need to be adapted or replaced based on Wiki Colloborations Nusantara's focus */}
      {/* <ServicesOverview /> */}
      {/* <WhyChooseUs /> */}
    </>
  );
}
