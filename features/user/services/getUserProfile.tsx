import { API_USER_PROFILE_URL } from "@/config/urls";
import { UserProfile } from "@/types/spotify";

export const getUserProfile = async () => {
    const res = await fetch(API_USER_PROFILE_URL, {
        method: "GET",
        credentials: "include",
    });
    const userProfile: UserProfile = await res.json();
    return userProfile;
};
