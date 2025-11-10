import { cookies } from "next/headers";

export const parseCookies = async () => {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore
        .getAll()
        .map((c) => `${c.name}=${c.value}`)
        .join("; ");

    return cookieHeader;
};
