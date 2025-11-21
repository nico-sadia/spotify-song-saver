import { Link } from "@/components/ui/Link";
import { PlaylistBadge } from "@/features/playlist/components/PlaylistBadge";
import { getSavedPlaylist } from "@/features/playlist/services/getSavedPlaylist";

export const PlaylistSection = async () => {
    const savedPlaylist = await getSavedPlaylist();
    const { name, images, external_urls, tracks } = savedPlaylist;
    return (
        <div className="basis-1/2 bg-neutral-800 w-full h-full p-4 rounded-2xl space-y-2">
            <div className="flex flex-row w-full">
                <h3 className="text-spotify-grey">Selected playlist:</h3>
                <span className="ml-auto">
                    <Link href="/settings" variant={"inline"} size={"sm"}>
                        Go to settings
                    </Link>
                </span>
            </div>
            <PlaylistBadge
                name={name}
                images={images}
                external_urls={external_urls}
            />
        </div>
    );
};
