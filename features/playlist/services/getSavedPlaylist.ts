import { API_SAVED_PLAYLIST_URL } from "@/config/urls";
import { Playlist } from "@/types/spotify";
import { spotifyApiFetch } from "@/lib/spotifyApiFetch";

export const getSavedPlaylist = async () => {
    const res = await spotifyApiFetch(API_SAVED_PLAYLIST_URL);
    return (await res.json()) as Playlist;
};
