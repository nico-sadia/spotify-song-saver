import { API_USER_PROFILE_URL } from "@/config/urls";
import { UserProfile } from "@/types/spotify";
import { parseCookies } from "@/utils/parseCookies";

export const getUserProfile = async () => {
    const res = await fetch(API_USER_PROFILE_URL, {
        method: "GET",
        headers: {
            Cookie: await parseCookies(),
        },
    });
    const userProfile: UserProfile = await res.json();
    return userProfile;
};
