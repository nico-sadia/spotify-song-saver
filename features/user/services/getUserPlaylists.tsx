import { API_USER_PLAYLISTS_URL } from "@/config/urls";
import { UserPlaylistsResponse } from "@/types/spotify";
import { parseCookies } from "@/utils/parseCookies";

export const getUserPlaylists = async (next?: string) => {
    const res = await fetch(next ? next : API_USER_PLAYLISTS_URL, {
        headers: {
            Cookie: await parseCookies(),
        },
    });

    const userPlaylistsResponse: UserPlaylistsResponse = await res.json();
    return userPlaylistsResponse;
};
