import { AuthResponse } from "@/types/api";
import { parseCookies } from "@/utils/parseCookies";
import { cache } from "react";

export const getAuthStatus = cache(async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/status`,
        {
            headers: {
                Cookie: await parseCookies(),
            },
        }
    );
    const authResponse: AuthResponse = await res.json();
    console.log(authResponse);
    return authResponse;
});
