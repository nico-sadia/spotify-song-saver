"use client";

import Image, { ImageProps } from "next/image";

const fallbackImage =
    "https://placehold.co/256x256/171717/white?text=Image+Not+Available";

type ImageWithFallbackProps = ImageProps;

export const ImageWithFallback = ({
    alt,
    src,
    ...props
}: ImageWithFallbackProps) => {
    return <Image alt={alt} src={src ? src : fallbackImage} {...props} />;
};
