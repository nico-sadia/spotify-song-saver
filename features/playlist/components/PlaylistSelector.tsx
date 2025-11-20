"use client";

import Button from "@/components/ui/Button";
import { RadioButton } from "@/components/ui/RadioButton";
import { Playlist } from "@/types/spotify";
import Image from "next/image";
import { useState } from "react";
import { updateSavedPlaylist } from "../services/updateSavedPlaylist";

type PlaylistSelectorProps = {
    playlists: Playlist[];
    total: number;
};

export const PlaylistSelector = ({
    playlists,
    total,
}: PlaylistSelectorProps) => {
    const [selectedPlaylistId, setselectedPlaylistId] = useState<string>();

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
                {playlists.map((playlist) => (
                    <div
                        key={playlist.id}
                        className="flex flex-row w-full gap-4 items-center hover:bg-neutral-700 p-1 sm:p-2 rounded-lg"
                    >
                        <div className="size-12 relative">
                            <Image
                                src={playlist.images[0].url}
                                alt="Playlist image"
                                fill={true}
                                className="rounded-lg object-cover"
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
                                name="playlist"
                                value={playlist.id}
                                size={"md"}
                                onClick={() =>
                                    setselectedPlaylistId(playlist.id)
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-spotify-grey flex flex-row justify-between">
                <div>
                    Playlist selected:{" "}
                    <span className="text-white font-semibold">
                        {playlists.map((p) => {
                            if (p.id === selectedPlaylistId) return p.name;
                        })}
                    </span>
                </div>
                <Button
                    variant={"primary"}
                    size={"md"}
                    onClick={async () =>
                        await updateSavedPlaylist(selectedPlaylistId!)
                    }
                    disabled={!selectedPlaylistId}
                >
                    Confirm
                </Button>
            </div>
        </>
    );
};
