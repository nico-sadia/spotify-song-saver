import { AUTH_LOGIN_URL } from "@/config/urls";
import { getAuthStatus } from "@/features/auth/services/getAuthStatus";
import { PlaylistSettingsSection } from "@/features/settings/components/PlaylistSettingsSection";
import { redirect } from "next/navigation";

export default async function Settings() {
    const auth = await getAuthStatus();
    if (!auth.isAuthenticated) {
        return redirect(AUTH_LOGIN_URL);
    }

    return (
        <div className="flex flex-col h-full w-full gap-8">
            <h1 className="font-bold text-3xl">Settings</h1>
            <div className="flex flex-row w-full gap-8">
                <PlaylistSettingsSection />
            </div>
        </div>
    );
}
