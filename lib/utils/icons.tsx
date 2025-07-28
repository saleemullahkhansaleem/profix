import {
  Monitor,
  Globe,
  Smartphone,
  CheckCircle,
  Sparkles,
  Download,
  ExternalLink,
  ArrowLeft,
  Users,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Globe,
  Smartphone,
  CheckCircle,
  Sparkles,
  Download,
  ExternalLink,
  ArrowLeft,
  Users,
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function DynamicIcon({
  name,
  className = "w-4 h-4",
  size,
}: DynamicIconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} size={size} />;
}
