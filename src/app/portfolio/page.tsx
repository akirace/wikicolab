
import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { PORTFOLIO_DATA, APP_NAME } from '@/lib/constants';
import { PortfolioCard } from '@/components/portfolio/PortfolioCard';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { MotionDiv } from '@/components/shared/MotionDiv';
import { staggerContainerVariants } from '@/components/shared/SectionWrapper';

export const metadata: Metadata = {
  title: 'Portofolio Kami',
  description: `Temukan pilihan proyek yang telah berhasil diselesaikan oleh ${APP_NAME}, menunjukkan keahlian dan komitmen kami terhadap kualitas.`,
};

export default function PortfolioPage() {
  return (
    <div className="pt-20"> {/* Adjust for fixed navbar */}
      <SectionWrapper id="portfolio-hero" className="!pt-24 !pb-16 md:!pt-32 md:!pb-20 bg-gradient-to-b from-background via-blue-50 to-teal-50">
        <div className="text-center">
          <AnimatedText 
            text="Rekam Jejak Terbukti Kami"
            el="h1"
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          />
          <AnimatedText
            text={`Jelajahi pameran proyek di mana ${APP_NAME} telah memberikan nilai dan hasil yang luar biasa. Setiap proyek mencerminkan dedikasi kami terhadap kualitas, efisiensi, dan kepuasan klien.`}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            stagger={0.01}
            delay={0.3}
          />
        </div>
      </SectionWrapper>

      {PORTFOLIO_DATA.length > 0 ? (
        <SectionWrapper id="projects-grid">
          <MotionDiv 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {PORTFOLIO_DATA.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </MotionDiv>
        </SectionWrapper>
      ) : (
        <SectionWrapper id="no-projects" className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Portofolio Kami Sedang Berkembang!</h2>
          <p className="text-muted-foreground">
            Saat ini kami sedang menyusun pameran proyek kami. Silakan periksa kembali segera untuk melihat hasil kerja kami.
          </p>
        </SectionWrapper>
      )}
    </div>
  );
}

    