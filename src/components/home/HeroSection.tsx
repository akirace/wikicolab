
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { APP_NAME } from '@/lib/constants';

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
        <div
          
          className="mb-6"
        >
          <Image
            src="https://img.aghatis.id/cdn/bG9jYWw6Ly8vd2lraV9jb2xhYl9sb2dvX3RyYW5zcGFyZW50LnBuZw=="
            alt={`${APP_NAME} Logo`}
            width={240}
            height={240}
            className="mx-auto"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          {APP_NAME}
        </h1>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          
        >
          PT WCN Hadir untuk berkolaborasi dengan anda.
        </p>

        <div
          
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="/services">
              <span>
                Lihat Layanan <ArrowRight className="ml-2 h-5 w-5 inline" />
              </span>
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-background/70 hover:bg-background shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="/contact">
              <span>Mulai Berkontribusi</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
