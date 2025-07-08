
import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { APP_NAME } from '@/lib/constants';
import { Eye, Target } from 'lucide-react';
import Image from 'next/image';
import { MissionList } from '@/components/about/MissionList';
import { ClientList } from '@/components/about/ClientList';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: `Pelajari tentang ${APP_NAME}, misi, visi, dan perjalanan kami dalam membangun platform kolaborasi untuk Nusantara.`,
};

export default function AboutPage() {
  return (
    <div className="pt-20"> {/* Adjust for fixed navbar */}
      <SectionWrapper id="company-intro" className="bg-gradient-to-b from-background via-blue-50 to-teal-50 !py-24 md:!py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedText 
              text={`Tentang ${APP_NAME}`}
              el="h1"
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            />
            <AnimatedText
              text="PT Wiki Collaborations Nusantara adalah perusahaan penyedia barang dan jasa profesional yang berbasis di Indonesia. Kami melayani berbagai kebutuhan operasional instansi pemerintah, BUMN, dan sektor swasta, mulai dari pengadaan barang, penyediaan tenaga kerja, hingga layanan teknis seperti service perangkat IT (laptop & MacBook). Dengan mengusung semangat kolaboratif dan efisiensi, kami hadir untuk menjadi mitra kerja yang terpercaya, solutif, dan berkomitmen terhadap kepuasan klien."
              className="text-lg text-muted-foreground leading-relaxed text-left"
              stagger={0.01}
              delay={0.3}
            />
          </div>
          <div>
            <Image 
              src="https://img.aghatis.id/cdn/bG9jYWw6Ly8vd2lraWNvbGFiX2xvZ28uanBn" 
              alt={`Logo ${APP_NAME}`}
              width={600} 
              height={450}
              className="rounded-xl shadow-2xl object-cover"
              data-ai-hint="company logo"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="vision-mission" className="bg-background">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 border border-border rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-semibold">Visi Kami</h2>
            </div>
            <AnimatedText
              text="Menjadi perusahaan terdepan dalam penyediaan barang dan jasa yang profesional, terpercaya, dan mampu beradaptasi dengan kebutuhan zaman."
              className="text-muted-foreground leading-relaxed"
              stagger={0.01}
            />
          </div>
          <div className="p-8 border border-border rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-10 w-10 text-accent" />
              <h2 className="text-3xl font-semibold">Misi Kami</h2>
            </div>
            <MissionList />
          </div>
        </div>
      </SectionWrapper>

      <ClientList />

    </div>
  );
}
