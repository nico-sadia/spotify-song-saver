import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Link } from "@/components/ui/Link";
import type { SpotifyImage } from "@/types/spotify";

export const PlaylistBadge = ({
    name,
    images,
    external_urls,
}: {
    name: string;
    images: SpotifyImage[];
    external_urls: {
        spotify: string;
    };
}) => {
    return (
        <div className="flex flex-row gap-4 min-w-0">
            <div className="relative size-32 shrink-0">
                <ImageWithFallback
                    src={images?.[0]?.url}
                    alt="Saved playlist image"
                    fill={true}
                    className="rounded-2xl object-cover"
                    unoptimized
                />
            </div>
            <div className="min-w-0 flex flex-col justify-center">
                <Link
                    href={external_urls.spotify}
                    variant="inline"
                    target="_blank"
                >
                    <span className="text-lg truncate block">{name}</span>
                </Link>
            </div>
        </div>
    );
};
