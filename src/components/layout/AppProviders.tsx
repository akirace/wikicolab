"use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  // const pathname = usePathname();

  // return (
  //   <AnimatePresence mode="wait">
  //     <motion.div
  //       key={pathname}
  //       className="flex flex-col flex-grow" 
  //       initial={{ opacity: 0, y: 20 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       exit={{ opacity: 0, y: -20 }}
  //       transition={{ duration: 0.3, ease: "easeInOut" }}
  //     >
  //       {children}
  //     </motion.div>
  //   </AnimatePresence>
  // );

  // Temporarily return children directly to disable animations and isolate the error
  return <>{children}</>;
}
