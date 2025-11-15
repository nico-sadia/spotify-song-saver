import { AuthResponse } from "@/types/api";
import { parseCookies } from "@/utils/parseCookies";

export const getAuthStatus = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/status`,
        {
            headers: {
                Cookie: await parseCookies(),
            },
        }
    );
    const authResponse: AuthResponse = await res.json();
    return authResponse;
};
