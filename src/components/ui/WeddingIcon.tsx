import Image from "next/image";
import { cn } from "@/lib/utils";

interface WeddingIconProps {
  size?: number;
  className?: string;
  alt?: string;
}

export function WeddingIcon({
  size = 24,
  className,
  alt = "Ikona",
}: WeddingIconProps) {
  return (
    <Image
      src="/icon.png"
      alt={alt}
      width={size}
      height={size}
      className={cn("object-contain", className)}
    />
  );
}
