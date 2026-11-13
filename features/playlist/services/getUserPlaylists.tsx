import { API_USER_PLAYLISTS_URL } from "@/config/urls";
import { UserPlaylistsResponse } from "@/types/spotify";
import { spotifyApiFetch } from "@/lib/spotifyApiFetch";

export const getUserPlaylists = async (next?: string) => {
    const res = await spotifyApiFetch(next ?? API_USER_PLAYLISTS_URL);
    return (await res.json()) as UserPlaylistsResponse;
};
