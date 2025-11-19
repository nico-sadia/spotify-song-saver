import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import NextLink from "next/link";

interface LinkProps
    extends React.ComponentPropsWithoutRef<"a">,
        VariantProps<typeof linkVariants> {
    href: string;
}

const linkVariants = cva("transition-colors duration-200", {
    variants: {
        variant: {
            default: "text-white hover:bg-neutral-800 p-2 rounded-lg",
            inline: "hover:text-white hover:underline",
        },
        active: {
            true: "text-spotify-green bg-neutral-800",
            false: "",
        },
    },
    defaultVariants: {
        variant: "default",
        active: false,
    },
});

export const Link = ({
    href,
    variant,
    active,
    children,
    ...props
}: LinkProps) => {
    return (
        <NextLink
            href={href}
            {...props}
            className={cn(linkVariants({ variant, active }))}
        >
            {children}
        </NextLink>
    );
};
