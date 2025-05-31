import Link from 'next/link';
import { APP_NAME, NAV_LINKS, CONTACT_DETAILS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingBag, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold text-primary mb-4">
              <ShoppingBag className="h-7 w-7" />
              {APP_NAME}
            </Link>
            <p className="text-sm">
              Your trusted partner for procurement of goods and services. We build client trust through reliability and efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0,4).map((link) => ( // Show first 4 links
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-primary transition-colors">
                  {CONTACT_DETAILS.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${CONTACT_DETAILS.whatsapp}`} className="hover:text-primary transition-colors">
                  {CONTACT_DETAILS.whatsapp} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{CONTACT_DETAILS.address}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm mb-3">Stay updated with our latest news and offers.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background" />
              <Button type="submit" variant="default" className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm">
          <p>&copy; {currentYear} {APP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
