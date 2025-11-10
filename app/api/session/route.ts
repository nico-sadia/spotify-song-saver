import { parseCookies } from "@/utils/parseCookies";

const userLoginUrl = "http://localhost:3080/auth";

export async function GET() {
    const backendRes = await fetch(userLoginUrl, {
        method: "GET",
        headers: { Cookie: await parseCookies() },
    });

    if (!backendRes.ok) return Response.json({ userId: null });

    const data = await backendRes.json();
    return Response.json(data);
}
