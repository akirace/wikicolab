
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Users } from 'lucide-react'; // Changed ShoppingBag to Users
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAV_LINKS, APP_NAME } from '@/lib/constants';
import type { NavLink as NavLinkType } from '@/lib/constants';
import { motion } from 'framer-motion';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold text-primary">
            <Users className="h-8 w-8" /> {/* Changed Icon */}
            {APP_NAME}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {NAV_LINKS.map((link) => (
              <Button key={link.href} variant="ghost" asChild className={`font-medium ${pathname === link.href ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
            <Button asChild className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Mulai Kolaborasi</Link> {/* Changed from Dapatkan Penawaran */}
            </Button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Buka menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <div className="flex flex-col space-y-6">
                  <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold text-primary mb-6" onClick={() => setIsOpen(false)}>
                     <Users className="h-8 w-8" /> {/* Changed Icon */}
                    {APP_NAME}
                  </Link>
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg font-medium ${pathname === link.href ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setIsOpen(false)}>
                    <Link href="/contact">Mulai Kolaborasi</Link> {/* Changed from Dapatkan Penawaran */}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
