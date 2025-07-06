"use client";

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const missions = [
  "Menyediakan layanan lengkap dan berkualitas tinggi bagi klien dari berbagai sektor.",
  "Menyediakan SDM terlatih dan profesional sesuai kebutuhan industri.",
  "Mengintegrasikan layanan digital dan teknis untuk meningkatkan efisiensi kerja.",
  "Membangun kepercayaan melalui pelayanan prima dan manajemen transparan.",
];

export function MissionList() {
  return (
    <ul className="space-y-4 text-muted-foreground">
      {missions.map((mission, index) => (
        <motion.li 
          key={index} 
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
          <span className="leading-relaxed">{mission}</span>
        </motion.li>
      ))}
    </ul>
  );
}
