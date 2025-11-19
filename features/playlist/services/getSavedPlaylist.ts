import { API_SAVED_PLAYLIST_URL } from "@/config/urls";
import { Playlist } from "@/types/spotify";
import { parseCookies } from "@/utils/parseCookies";

export const getSavedPlaylist = async () => {
    const res = await fetch(API_SAVED_PLAYLIST_URL, {
        headers: {
            Cookie: await parseCookies(),
        },
    });
    const savedPlaylist: Playlist = await res.json();
    return savedPlaylist;
};
