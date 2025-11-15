import NextLink from "next/link";

type LinkProps = React.ComponentPropsWithoutRef<"a"> & {
    href: string;
};

export const Link = ({ href, children, ...props }: LinkProps) => {
    return (
        <NextLink href={href} {...props} className="">
            {children}
        </NextLink>
    );
};
