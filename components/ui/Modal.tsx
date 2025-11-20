"use client";
import { VariantProps } from "class-variance-authority";
import { ReactNode, useState } from "react";
import Button, { buttonVariants } from "./Button";

interface ModalProps extends VariantProps<typeof buttonVariants> {
    buttonText: string;
    children: ReactNode;
}

export default function Modal({
    buttonText,
    children,
    variant,
    size,
    disabled,
}: ModalProps) {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Button
                variant={variant}
                size={size}
                disabled={disabled}
                onClick={() => setOpen(true)}
            >
                {buttonText}
            </Button>

            {open && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 max-w-3/5 max-h-11/12 space-y-4 flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                        <div className="flex justify-center">
                            <Button onClick={() => setOpen(false)}>
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
