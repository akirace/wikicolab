import {
  Home,
  Info,
  Briefcase,
  LayoutGrid,
  Mail,
  ShoppingCart,
  Wrench,
  Users,
  AirVent,
  Laptop,
  Armchair,
  Wind,
  Car,
  Sparkles,
  CheckCircle2,
  type LucideIcon
} from 'lucide-react';

export const APP_NAME = "Procurify Edge";

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/services', label: 'Services', icon: Briefcase },
  { href: '/portfolio', label: 'Portfolio', icon: LayoutGrid },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export type ServiceItem = {
  name: string;
  description: string;
  icon: LucideIcon;
  imageHint: string;
};

export type ServiceCategory = {
  category: string;
  items: ServiceItem[];
};

export const CORE_SERVICES_OVERVIEW: ServiceItem[] = [
  { name: "Product Procurement", description: "Sourcing high-quality products tailored to your business needs, from IT equipment to office essentials.", icon: ShoppingCart, imageHint: "shopping cart products" },
  { name: "Expert Repair Services", description: "Reliable and efficient repair services for laptops, MacBooks, and other critical equipment.", icon: Wrench, imageHint: "tools repair" },
  { name: "Staff Outsourcing", description: "Providing skilled and vetted drivers and cleaning staff to support your operations seamlessly.", icon: Users, imageHint: "team collaboration" },
];

export const SERVICES_DATA: ServiceCategory[] = [
  {
    category: "Product Procurement",
    items: [
      { name: "Air Conditioners", description: "Efficient and reliable AC units for optimal climate control.", icon: AirVent, imageHint: "air conditioner unit" },
      { name: "Laptops & Computers", description: "A wide range of laptops and desktops for all professional needs.", icon: Laptop, imageHint: "modern laptop" },
      { name: "Office Furniture", description: "Ergonomic and stylish furniture to create productive workspaces.", icon: Armchair, imageHint: "office chair desk" },
    ]
  },
  {
    category: "Specialized Services",
    items: [
      { name: "Laptop/MacBook Repair", description: "Expert repairs for all major brands, ensuring minimal downtime.", icon: Wrench, imageHint: "laptop repair tools" },
      { name: "AC Cleaning & Maintenance", description: "Comprehensive AC cleaning services for improved air quality and efficiency.", icon: Sparkles, imageHint: "cleaning ac unit" },
      { name: "Driver Staff Outsourcing", description: "Professional and reliable drivers for your transportation needs.", icon: Car, imageHint: "professional driver car" },
      { name: "Cleaning Staff Outsourcing", description: "Dedicated cleaning personnel for maintaining pristine environments.", icon: Users, imageHint: "cleaning team" },
    ]
  }
];

export const WHY_CHOOSE_US_POINTS: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Reliable Sourcing", description: "Access to a wide network of trusted suppliers for quality assurance.", icon: CheckCircle2, },
  { title: "Cost-Effective Solutions", description: "Competitive pricing and value-driven procurement strategies.", icon: CheckCircle2, },
  { title: "Expert Support", description: "Dedicated team providing personalized service and timely assistance.", icon: CheckCircle2, },
  { title: "Timely Delivery", description: "Efficient logistics ensuring your goods and services are delivered on schedule.", icon: CheckCircle2, },
];

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
};

export const PORTFOLIO_DATA: PortfolioItem[] = [
  { id: "1", title: "Tech Startup Office Setup", description: "Full procurement of IT infrastructure and office furniture for a growing tech startup.", imageUrl: "https://placehold.co/600x400.png", imageHint: "modern office startup", category: "Office Setup" },
  { id: "2", title: "Retail Chain AC Upgrade", description: "Installation of 50+ energy-efficient AC units across multiple retail locations.", imageUrl: "https://placehold.co/600x400.png", imageHint: "retail store interior", category: "AC Installation" },
  { id: "3", title: "Corporate Laptop Refresh", description: "Sourced and configured 200 new laptops for a major corporation's hardware refresh cycle.", imageUrl: "https://placehold.co/600x400.png", imageHint: "laptops meeting", category: "IT Procurement" },
  { id: "4", title: "Logistics Firm Driver Support", description: "Provided a team of 10 professional drivers for peak season operations.", imageUrl: "https://placehold.co/600x400.png", imageHint: "delivery truck driver", category: "Staff Outsourcing" },
];

export const TIMELINE_EVENTS = [
  { year: "Early 2024", title: "Inception & Foundation", description: "Procurify Edge was established with a mission to revolutionize procurement services." },
  { year: "Mid 2024", title: "First Major Client", description: "Secured our first significant contract, showcasing our capability and reliability." },
  { year: "Late 2024", title: "Service Expansion", description: "Expanded our service offerings to include specialized repairs and staff outsourcing." },
  { year: "Present", title: "Growing Strong", description: "Continuously building trust and delivering excellence to a growing portfolio of clients." },
];

export const CONTACT_DETAILS = {
  email: "info@procurifyedge.com",
  whatsapp: "+1234567890", // Replace with actual number
  address: "123 Procurement Drive, Business City, BC 12345",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322839!2d106.81956131476966!3d-6.194741395512957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f427f9a4cf5f%3A0x2234493262258588!2sJakarta!5e0!3m2!1sen!2sid!4v1623743380000!5m2!1sen!2sid" // Example URL, replace
};
