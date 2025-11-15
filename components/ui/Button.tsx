"use client";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps
    extends React.ComponentPropsWithoutRef<"button">,
        VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
    // base classes (always applied)
    "inline-flex items-center justify-center rounded-4xl font-bold transition hover:scale-102 ease-linear duration-100 cursor-pointer",
    {
        variants: {
            variant: {
                primary: "bg-spotify-green text-black hover:bg-green-400",
                secondary: "bg-white text-black hover:bg-neutral-200",
            },
            size: {
                sm: "px-3 py-1 text-sm",
                md: "px-6 py-2 text-base",
                lg: "px-9 py-3 text-lg",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export default function Button({
    children,
    variant,
    size,
    ...props
}: ButtonProps) {
    return (
        <button {...props} className={cn(buttonVariants({ variant, size }))}>
            {children}
        </button>
    );
}
