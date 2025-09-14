
import type { LucideIcon } from 'lucide-react';
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
  Globe
} from 'lucide-react';
import type { IconName } from '@/components/shared/IconByName';

export const APP_NAME = "PT Wiki Collaborations Nusantara";

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Beranda', icon: Home },
  { href: '/about', label: 'Tentang Kami', icon: Info },
  { href: '/services', label: 'Layanan', icon: Briefcase },
  { href: '/contact', label: 'Kontak', icon: Mail },
];

// This type is used by CORE_SERVICES_OVERVIEW and SERVICES_DATA (via ServiceCategory)
export type ServiceItem = {
  name: string;
  description: string;
  iconName: IconName; // Changed from icon: LucideIcon
  imageHint?: string; // Made optional as CORE_SERVICES_OVERVIEW doesn't provide it
};

export type ServiceCategory = {
  category: string;
  items: ServiceItem[]; // Uses the updated ServiceItem
};

export const CORE_SERVICES_OVERVIEW: ServiceItem[] = [
  { name: "Pengadaan Produk", description: "Pengadaan produk berkualitas tinggi yang disesuaikan dengan kebutuhan bisnis Anda, mulai dari peralatan IT hingga kebutuhan kantor.", iconName: "ShoppingCart" },
  { name: "Layanan Perbaikan Ahli", description: "Layanan perbaikan yang andal dan efisien untuk laptop, MacBook, dan peralatan penting lainnya.", iconName: "Wrench" },
  { name: "Outsourcing Staf", description: "Menyediakan pengemudi dan staf kebersihan yang terampil dan terverifikasi untuk mendukung operasional Anda dengan lancar.", iconName: "Users" },
];

// Deprecated: Use DETAILED_SERVICES_DATA for the new services page structure
export const SERVICES_DATA: ServiceCategory[] = [
  {
    category: "Pengadaan Produk",
    items: [
      { name: "Pendingin Ruangan (AC)", description: "Unit AC yang efisien dan andal untuk kontrol iklim optimal.", iconName: "AirVent", imageHint: "unit pendingin ruangan" },
      { name: "Laptop & Komputer", description: "Berbagai macam laptop dan desktop untuk semua kebutuhan profesional.", iconName: "Laptop", imageHint: "laptop modern" },
      { name: "Furnitur Kantor", description: "Furnitur ergonomis dan bergaya untuk menciptakan ruang kerja yang produktif.", iconName: "Armchair", imageHint: "kursi meja kantor" },
    ]
  },
  {
    category: "Layanan Khusus",
    items: [
      { name: "Perbaikan Laptop/MacBook", description: "Perbaikan ahli untuk semua merek utama, memastikan waktu henti minimal.", iconName: "Wrench", imageHint: "alat perbaikan laptop" },
      { name: "Pembersihan & Perawatan AC", description: "Layanan pembersihan AC komprehensif untuk kualitas udara dan efisiensi yang lebih baik.", iconName: "Sparkles", imageHint: "membersihkan unit ac" },
      { name: "Outsourcing Staf Pengemudi", description: "Pengemudi profesional dan andal untuk kebutuhan transportasi Anda.", iconName: "Car", imageHint: "pengemudi mobil profesional" },
      { name: "Outsourcing Staf Kebersihan", description: "Personel kebersihan berdedikasi untuk menjaga lingkungan tetap bersih.", iconName: "Users", imageHint: "tim kebersihan" },
    ]
  }
];

export type DetailedServicePoint = {
  name: string;
  description: string;
};

export type DetailedServiceCategory = {
  category: string;
  icon: LucideIcon;
  items: DetailedServicePoint[];
};

export const DETAILED_SERVICES_DATA: DetailedServiceCategory[] = [
  {
    category: "Jasa Layanan Operasional & SDM",
    icon: Users,
    items: [
      { name: "Managed Services", description: "Manajemen penuh atas layanan operasional harian kantor atau fasilitas." },
      { name: "Driver Services", description: "Pengemudi profesional untuk operasional harian, event, atau kontrak jangka panjang." },
      { name: "Office Support", description: "Penyedia tenaga kerja seperti OB, kurir, admin, teknisi umum, dan messenger." },
      { name: "IT Resources Support", description: "Penyedia tenaga kerja seperti Quality Assurance, Java Developer, Back end, Project Manager, Technical Writer, Business Analyst, Solution Analyst, dsb." },
    ]
  },
  {
    category: "Jasa Service & Teknologi",
    icon: Wrench,
    items: [
      { name: "Service Laptop & MacBook", description: "Perbaikan, upgrade, dan perawatan berkala untuk berbagai tipe laptop, MacBook dan PC." },
      { name: "IT Support & Maintenance", description: "Dukungan teknis berkala untuk perusahaan, termasuk instalasi, Maintenance AC, Service AC, troubleshooting, dan pengelolaan asset." },
    ]
  },
  {
    category: "Pengadaan Barang & Jasa",
    icon: ShoppingCart,
    items: [
      { name: "ATK (Alat Tulis Kantor)", description: "Penyediaan alat tulis kantor untuk kebutuhan operasional." },
      { name: "Elektronik & perangkat IT", description: "Pengadaan laptop, komputer, printer, dan perangkat keras lainnya." },
      { name: "Peralatan kebersihan dan keamanan", description: "Menyediakan peralatan untuk menjaga kebersihan dan keamanan lingkungan kerja." },
      { name: "Barang proyek dan kebutuhan khusus lainnya", description: "Pengadaan barang spesifik sesuai dengan kebutuhan proyek Anda." },
      { name: "Pengadaan via e-catalog atau tender", description: "Memfasilitasi proses pengadaan melalui platform e-catalog pemerintah atau tender." },
    ]
  }
];

export const SERVICE_ADVANTAGES: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "One-Stop Solution", description: "Dari tenaga kerja, pengadaan, hingga service teknis, semua dalam satu atap.", icon: CheckCircle2 },
  { title: "Teknisi Ahli", description: "Penanganan ahli untuk service Laptop, MacBook, dan perangkat premium lainnya.", icon: Sparkles },
  { title: "Jangkauan Nasional", description: "Dukungan layanan yang luas ke berbagai wilayah di seluruh Indonesia.", icon: Globe },
];


export const WHY_CHOOSE_US_POINTS: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Sumber Terpercaya", description: "Akses ke jaringan luas pemasok tepercaya untuk jaminan kualitas.", icon: CheckCircle2, },
  { title: "Solusi Hemat Biaya", description: "Harga kompetitif dan strategi pengadaan berbasis nilai.", icon: CheckCircle2, },
  { title: "Dukungan Ahli", description: "Tim berdedikasi yang menyediakan layanan personal dan bantuan tepat waktu.", icon: CheckCircle2, },
  { title: "Pengiriman Tepat Waktu", description: "Logistik efisien memastikan barang dan layanan Anda dikirim sesuai jadwal.", icon: CheckCircle2, },
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
  { id: "1", title: "Penyiapan Kantor Startup Teknologi", description: "Pengadaan penuh infrastruktur TI dan furnitur kantor untuk startup teknologi yang sedang berkembang.", imageUrl: "https://placehold.co/600x400.png", imageHint: "kantor modern startup", category: "Penyiapan Kantor" },
  { id: "2", title: "Peningkatan AC Rantai Ritel", description: "Pemasangan 50+ unit AC hemat energi di berbagai lokasi ritel.", imageUrl: "https://placehold.co/600x400.png", imageHint: "interior toko ritel", category: "Instalasi AC" },
  { id: "3", title: "Pembaruan Laptop Korporat", description: "Pengadaan dan konfigurasi 200 laptop baru untuk siklus pembaruan perangkat keras perusahaan besar.", imageUrl: "https://placehold.co/600x400.png", imageHint: "rapat laptop", category: "Pengadaan TI" },
  { id: "4", title: "Dukungan Pengemudi Firma Logistik", description: "Menyediakan tim 10 pengemudi profesional untuk operasi musim puncak.", imageUrl: "https://placehold.co/600x400.png", imageHint: "pengemudi truk pengiriman", category: "Outsourcing Staf" },
];

export const TIMELINE_EVENTS = [
  { year: "Awal 2024", title: "Pendirian & Pembentukan", description: `${APP_NAME} didirikan dengan misi untuk merevolusi layanan pengadaan.` },
  { year: "Pertengahan 2024", title: "Klien Besar Pertama", description: "Memperoleh kontrak signifikan pertama kami, menunjukkan kemampuan dan keandalan kami." },
  { year: "Akhir 2024", title: "Ekspansi Layanan", description: "Memperluas penawaran layanan kami untuk mencakup perbaikan khusus dan outsourcing staf." },
  { year: "Saat Ini", title: "Tumbuh Kuat", description: "Terus membangun kepercayaan dan memberikan keunggulan kepada portofolio klien yang terus berkembang." },
];

export const CONTACT_DETAILS = {
  email: "wikicollaborationsnusantara@gmail.com",
  whatsapp: "+6281282556357",
  address: "Jalan Srengseng Raya, Kembangan, Jakarta Barat",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.529323758833!2d106.7459140759082!3d-6.194553860683056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f70d5ab5e6ef%3A0x24e6f3344b1a457!2sJl.%20Srengseng%20Raya%2C%20Kembangan%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1719464771234!5m2!1sen!2sid"
};
