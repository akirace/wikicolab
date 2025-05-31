
import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { ContactForm } from '@/components/contact/ContactForm';
import { CONTACT_DETAILS, APP_NAME } from '@/lib/constants';
import { Mail, Phone, MapPin } from 'lucide-react';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { MotionDiv } from '@/components/shared/MotionDiv';

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description: `Hubungi ${APP_NAME}. Kami siap mendengar ide kolaborasi Anda atau menjawab pertanyaan Anda.`,
};

export default function ContactPage() {
  return (
    <div className="pt-20"> {/* Adjust for fixed navbar */}
       <SectionWrapper id="contact-hero" className="!pt-24 !pb-16 md:!pt-32 md:!pb-20 bg-gradient-to-b from-background via-blue-50 to-teal-50">
        <div className="text-center">
          <AnimatedText 
            text="Hubungi Kami"
            el="h1"
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          />
          <AnimatedText
            text={`Punya ide kolaborasi atau pertanyaan untuk ${APP_NAME}? Jangan ragu untuk menghubungi kami!`}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            stagger={0.01}
            delay={0.3}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact-content" className="bg-background">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8 p-8 bg-card border border-border rounded-xl shadow-lg"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6">Informasi Kontak</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {CONTACT_DETAILS.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Telepon/WhatsApp</h3>
                    <a href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      {CONTACT_DETAILS.whatsapp}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Alamat</h3>
                    <p className="text-muted-foreground">{CONTACT_DETAILS.address}</p>
                  </div>
                </div>
              </div>
            </div>
             <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Temukan Kami di Peta</h3>
                <div className="aspect-video rounded-lg overflow-hidden border border-border">
                    <iframe
                        src={CONTACT_DETAILS.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border:0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokasi Google Maps"
                    ></iframe>
                </div>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="p-8 bg-card border border-border rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Kirim Pesan kepada Kami</h2>
            <ContactForm />
          </MotionDiv>
        </div>
      </SectionWrapper>
    </div>
  );
}
