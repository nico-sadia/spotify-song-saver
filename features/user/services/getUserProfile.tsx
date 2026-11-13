import { API_USER_PROFILE_URL } from "@/config/urls";
import { UserProfile } from "@/types/spotify";
import { spotifyApiFetch } from "@/lib/spotifyApiFetch";

export const getUserProfile = async () => {
    const res = await spotifyApiFetch(API_USER_PROFILE_URL);
    return (await res.json()) as UserProfile;
};
