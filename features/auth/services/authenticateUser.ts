import { AuthResponse } from "@/types/api";
import { parseCookies } from "@/utils/parseCookies";

export const authenticateUser = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/session`, {
        method: "GET",
        headers: {
            Cookie: await parseCookies(),
        },
    });
    const data: AuthResponse = await res.json();
    return data.isAuthenticated;
};
