"use client";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps
    extends Omit<React.ComponentPropsWithoutRef<"button">, "disabled">,
        VariantProps<typeof buttonVariants> {}

export const buttonVariants = cva(
    // base classes (always applied)
    "inline-flex items-center justify-center rounded-4xl font-bold transition hover:scale-102 ease-linear duration-100 cursor-pointer",
    {
        variants: {
            variant: {
                primary: "bg-spotify-green text-black hover:bg-green-400",
                secondary:
                    "bg-white opacity-90 text-black hover:bg-neutral-300",
                danger: "text-red-400 hover:text-red-500 border-2 border-red-600 hover:border-red-500",
            },
            size: {
                sm: "px-3 py-1 text-sm",
                md: "px-6 py-2 text-base",
                lg: "px-9 py-3 text-lg",
            },
            disabled: {
                true: "opacity-50 cursor-not-allowed pointer-events-none",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            disabled: false,
        },
    }
);

export default function Button({
    children,
    variant,
    size,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(buttonVariants({ variant, size, disabled }))}
        >
            {children}
        </button>
    );
}
