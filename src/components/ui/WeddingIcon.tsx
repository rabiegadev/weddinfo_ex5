import Image from "next/image";
import { cn } from "@/lib/utils";

interface WeddingIconProps {
  src: string;
  size?: number;
  className?: string;
  alt?: string;
}

export function WeddingIcon({
  src,
  size = 24,
  className,
  alt = "Ikona",
}: WeddingIconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn("object-contain", className)}
    />
  );
}
