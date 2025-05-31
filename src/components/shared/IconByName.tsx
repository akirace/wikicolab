
import type { LucideProps } from 'lucide-react';
import {
  ShoppingCart,
  Wrench,
  Users,
  AirVent,
  Laptop,
  Armchair,
  Sparkles,
  Car,
} from 'lucide-react';

// Define a type for the icon names that corresponds to the keys in the map.
export type IconName =
  | "ShoppingCart"
  | "Wrench"
  | "Users"
  | "AirVent"
  | "Laptop"
  | "Armchair"
  | "Sparkles"
  | "Car";

const iconMap: Record<IconName, React.FC<LucideProps>> = {
  ShoppingCart,
  Wrench,
  Users,
  AirVent,
  Laptop,
  Armchair,
  Sparkles,
  Car,
};

interface IconByNameProps extends LucideProps {
  name: IconName;
}

export const IconByName: React.FC<IconByNameProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    // Fallback or error handling for development
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Icon "${name}" not found in IconByName component.`);
    }
    return null; // Or a default fallback icon
  }

  return <IconComponent {...props} />;
};
