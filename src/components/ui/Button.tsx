import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-body font-medium tracking-wide uppercase transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" &&
            "bg-olive text-white shadow-card hover:bg-olive-dark",
          variant === "outline" &&
            "border border-gold/40 bg-transparent text-olive hover:border-gold hover:bg-gold/5",
          variant === "ghost" && "bg-transparent text-olive hover:bg-olive/5",
          size === "sm" && "px-5 py-2 text-xs",
          size === "md" && "px-7 py-3 text-sm",
          size === "lg" && "px-10 py-4 text-sm",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
