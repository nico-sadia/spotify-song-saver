import { redirect } from "next/navigation";
import { AUTH_LOGIN_URL } from "@/config/urls";
import { parseCookies } from "@/utils/parseCookies";

type ApiErrorBody = {
    code?: string;
    message?: string;
};

export const spotifyApiFetch = async (
    input: RequestInfo | URL,
    init: RequestInit = {}
) => {
    const headers = new Headers(init.headers);
    headers.set("Cookie", await parseCookies());

    const response = await fetch(input, {
        ...init,
        headers,
        cache: init.cache ?? "no-store",
    });

    if (!response.ok) {
        const body = (await response
            .clone()
            .json()
            .catch(() => null)) as ApiErrorBody | null;

        if (
            response.status === 401 &&
            (body?.code === "SPOTIFY_REAUTH_REQUIRED" ||
                body?.code === "UNAUTHENTICATED" ||
                body?.message === "Unauthorized")
        ) {
            redirect(AUTH_LOGIN_URL);
        }

        throw new Error(
            body?.message ?? `Spotify API request failed (${response.status})`
        );
    }

    return response;
};
