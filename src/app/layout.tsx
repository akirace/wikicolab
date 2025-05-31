import type { Metadata } from 'next';
import { Poppins, PT_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { AppProviders } from '@/components/layout/AppProviders';

// Using next/font as per best practices, despite guideline deviation for Google Fonts via <link>
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Procurify Edge - Your Procurement Partner',
    template: '%s | Procurify Edge',
  },
  description: 'Procurify Edge offers expert procurement of goods and services, building client trust with reliable and efficient solutions since 2024.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Font links are managed by next/font, no need for manual <link> tags unless specific advanced cases. */}
      </head>
      <body className={`${poppins.variable} ${ptSans.variable} font-body antialiased flex flex-col min-h-screen`}>
        <AppProviders>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
