import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

interface RadioButtonProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "ref" | "size">,
        VariantProps<typeof radioButtonVariants> {}

const radioButtonVariants = cva("accent-spotify-green cursor-pointer", {
    variants: {
        size: {
            sm: "size-4",
            md: "size-5",
            lg: "size-6",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

export const RadioButton = ({ size, ...props }: RadioButtonProps) => {
    return (
        <input
            type="radio"
            {...props}
            className={cn(radioButtonVariants({ size }))}
        ></input>
    );
};
