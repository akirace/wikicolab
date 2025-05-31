
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
  CheckCircle2
} from 'lucide-react';
import type { IconName } from '@/components/shared/IconByName';

export const APP_NAME = "Wiki Colloborations Nusantara";

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Beranda', icon: Home },
  { href: '/about', label: 'Tentang Kami', icon: Info },
  { href: '/services', label: 'Layanan', icon: Briefcase },
  { href: '/portfolio', label: 'Portofolio', icon: LayoutGrid },
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
  email: "wikicollaborations@gmail.com",
  whatsapp: "+6285352880958",
  address: "Kiruntag, Jalan Raya Kelapa Dua, Kebon Jeruk Jakarta Barat",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.664086913662!2d106.7576923147695!3d-6.180169995527819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f71c84760931%3A0x9705f455a36a118!2sJl.%20Raya%20Kelapa%20Dua%2C%20Kb.%20Jeruk%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1623743380000!5m2!1sen!2sid" // Updated Map URL for Kebon Jeruk, Jakarta Barat
};
