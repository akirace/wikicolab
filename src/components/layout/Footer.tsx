
import Link from 'next/link';
import { APP_NAME, NAV_LINKS, CONTACT_DETAILS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users, Mail, Phone, MapPin } from 'lucide-react'; // Changed ShoppingBag to Users

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold text-primary mb-4">
              <Users className="h-7 w-7" /> {/* Changed Icon */}
              {APP_NAME}
            </Link>
            <p className="text-sm break-words">
              PT WCN Hadir untuk berkolaborasi dengan anda.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground mb-4">Tautan Cepat</h3>
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
            <h3 className="text-lg font-headline font-semibold text-foreground mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-1" />
                <a href={`tel:${CONTACT_DETAILS.whatsapp.replace(/\D/g, '')}`} className="hover:text-primary transition-colors break-words">
                  {CONTACT_DETAILS.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="break-words">{CONTACT_DETAILS.address}</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm">
          <p>&copy; {currentYear} {APP_NAME}. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
