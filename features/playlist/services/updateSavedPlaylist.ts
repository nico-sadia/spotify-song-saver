"use server";

import { API_SAVED_PLAYLIST_URL } from "@/config/urls";
import { parseCookies } from "@/utils/parseCookies";
import { refresh } from "next/cache";

export const updateSavedPlaylist = async (playlistId: string) => {
    console.log(playlistId);
    const res = await fetch(API_SAVED_PLAYLIST_URL, {
        method: "PATCH",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            Cookie: await parseCookies(),
        },
        body: JSON.stringify({ playlistId: playlistId }),
    });
    const data = await res.json();
    console.log(data);
    refresh();
    return data;
};
