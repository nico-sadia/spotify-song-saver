"use server";

import { API_SAVED_PLAYLIST_URL } from "@/config/urls";
import { spotifyApiFetch } from "@/lib/spotifyApiFetch";
import { refresh } from "next/cache";

export const updateSavedPlaylist = async (playlistId: string | null) => {
    console.log(playlistId);
    const res = await spotifyApiFetch(API_SAVED_PLAYLIST_URL, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ playlistId: playlistId }),
    });
    const data = await res.json();
    console.log(data);
    refresh();
    return data;
};
