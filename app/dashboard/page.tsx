import { AUTH_LOGIN_URL } from "@/config/urls";
import { getAuthStatus } from "@/features/auth/services/getAuthStatus";
import { ConfigSection } from "@/features/dashboard/components/ConfigSection";
import { EventSection } from "@/features/dashboard/components/EventSection";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const auth = await getAuthStatus();
    if (!auth.isAuthenticated) {
        return redirect(AUTH_LOGIN_URL);
    }

    return (
        <div className="flex flex-col h-full w-full gap-8">
            <h1 className="font-bold text-3xl"> Dashboard</h1>
            <div className="flex flex-row w-full gap-8">
                <ConfigSection />
                <EventSection />
            </div>
        </div>
    );
}
