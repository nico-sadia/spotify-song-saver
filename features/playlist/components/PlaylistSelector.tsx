import { RadioButton } from "@/components/ui/RadioButton";
import { getUserPlaylists } from "@/features/user/services/getUserPlaylists";
import Image from "next/image";

export const PlaylistSelector = async () => {
    const { items, next, total } = await getUserPlaylists();
    return (
        <>
            <div className="flex flex-row items-center">
                <h1 className="font-semibold text-lg">Select playlist:</h1>
                <h1 className="ml-auto text-sm text-spotify-grey">
                    {total} playlists
                </h1>
            </div>
            <div className="grid my-scroll overflow-y-scroll overflow-x-hidden grid-cols-1 w-full">
                <div></div>
                {items.map((playlist) => (
                    <div
                        key={playlist.id}
                        className="flex flex-row w-full gap-4 items-center hover:bg-neutral-700 p-1 sm:p-2 rounded-lg"
                    >
                        <div className="size-12 relative">
                            <Image
                                src={playlist.images[0].url}
                                alt="Playlist image"
                                fill={true}
                                className="rounded-lg"
                            />
                        </div>
                        <h1 className="truncate text-sm md:text-base flex-1/2">
                            {playlist.name}
                        </h1>
                        <p className="text-spotify-grey text-xs md:text-sm flex-1/4 max-md:hidden">
                            {playlist.tracks.total} songs
                        </p>
                        <div className="flex-none">
                            <RadioButton
                                type="radio"
                                name="playlist"
                                value={playlist.id}
                                size={"sm"}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-spotify-grey">Playlist selected: </div>
        </>
    );
};
