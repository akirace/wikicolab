
import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { APP_NAME, TIMELINE_EVENTS } from '@/lib/constants';
import { Eye, Target, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import { BusinessTimeline } from '@/components/about/BusinessTimeline';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: `Pelajari tentang ${APP_NAME}, misi, visi, dan perjalanan kami dalam menyediakan layanan pengadaan terbaik.`,
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
              text={`Didirikan pada awal tahun 2024, ${APP_NAME} berdedikasi untuk menyederhanakan kompleksitas pengadaan. Kami memberdayakan bisnis dengan menyediakan akses yang efisien ke barang dan jasa penting, mendorong pertumbuhan dan keunggulan operasional. Tim ahli kami berkomitmen untuk membangun kemitraan jangka panjang berdasarkan kepercayaan, transparansi, dan kesuksesan bersama.`}
              className="text-lg text-muted-foreground leading-relaxed"
              stagger={0.01}
              delay={0.3}
            />
          </div>
          <div>
            <Image 
              src="https://placehold.co/600x450.png" 
              alt={`Tim ${APP_NAME}`}
              width={600} 
              height={450}
              className="rounded-xl shadow-2xl object-cover"
              data-ai-hint="tim profesional"
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
              text="Menjadi mitra pengadaan terkemuka, yang diakui atas inovasi, keandalan, dan komitmen teguh terhadap kesuksesan klien di berbagai industri."
              className="text-muted-foreground leading-relaxed"
              stagger={0.01}
            />
          </div>
          <div className="p-8 border border-border rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-10 w-10 text-accent" />
              <h2 className="text-3xl font-semibold">Misi Kami</h2>
            </div>
            <AnimatedText
              text="Memberikan solusi pengadaan yang luar biasa dengan memanfaatkan keahlian, teknologi, dan pendekatan yang berpusat pada klien, memastikan nilai, efisiensi, dan kepuasan dalam setiap transaksi."
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

    