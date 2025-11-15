import { AUTH_LOGIN_URL } from "@/config/urls";
import { getAuthStatus } from "@/features/auth/services/getAuthStatus";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const auth = await getAuthStatus();
    if (!auth.isAuthenticated) {
        return redirect(AUTH_LOGIN_URL);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard</p>
        </div>
    );
}
