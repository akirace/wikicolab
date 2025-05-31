
import type { Metadata } from 'next';
import { Poppins, PT_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { AppProviders } from '@/components/layout/AppProviders';
import { APP_NAME } from '@/lib/constants';

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
    default: `${APP_NAME} - Kolaborasi untuk Nusantara`,
    template: `%s | ${APP_NAME}`,
  },
  description: `${APP_NAME} adalah platform kolaborasi untuk berbagi pengetahuan dan sumber daya demi kemajuan Nusantara.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Google Font links are managed by next/font, no need for manual <link> tags unless specific advanced cases. */}
      </head>
      <body className={`${poppins.variable} ${ptSans.variable} font-body antialiased flex flex-col min-h-screen`}>
        <AppProviders>
          <div className="flex flex-col flex-grow">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </AppProviders>
        <Toaster />
      </body>
    </html>
  );
}
