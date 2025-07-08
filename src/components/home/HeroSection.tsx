"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { APP_NAME } from '@/lib/constants';
import { AnimatedText } from '@/components/shared/AnimatedText';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-blue-50 to-teal-50">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-blob"
        style={{ animationDelay: '0s' }}
      ></motion.div>
      <motion.div
        className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-blob"
        style={{ animationDelay: '2s' }}
      ></motion.div>
       <motion.div
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-secondary/30 rounded-full filter blur-3xl opacity-50 animate-blob"
        style={{ animationDelay: '4s' }}
      ></motion.div>

      <style jsx global>{`
        .animate-blob {
          animation: blob 10s infinite alternate;
        }
        @keyframes blob {
          0% { transform: scale(1) translate(0px, 0px); }
          33% { transform: scale(1.1) translate(30px, -50px); }
          66% { transform: scale(0.9) translate(-20px, 20px); }
          100% { transform: scale(1) translate(0px, 0px); }
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Users className="mx-auto h-16 w-16 text-primary mb-6" />
        </motion.div>

        <AnimatedText 
          text={APP_NAME}
          el="h1"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          stagger={0.05}
        />
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          Platform kolaborasi Anda untuk berbagi pengetahuan, mengembangkan ide, dan memajukan Nusantara bersama.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="/portfolio">
              <span>
                Lihat Proyek Kolaborasi <ArrowRight className="ml-2 h-5 w-5 inline" /> {/* Ensure ArrowRight is treated as inline content */}
              </span>
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-background/70 hover:bg-background shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="/contact">
              <span>Mulai Berkontribusi</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
