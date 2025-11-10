import { LoginWithSpotifyButton } from "@/features/auth/components/LoginWithSpotifyButton";
import { authenticateUser } from "@/features/auth/services/authenticateUser";

export default async function Home() {
    const isAuthenticated = await authenticateUser();

    return (
        <main className="flex flex-col justify-center gap-6">
            <h1 className="font-semibold text-4xl">Spotify Song Saver</h1>
            {isAuthenticated ? (
                <h1>{isAuthenticated}</h1>
            ) : (
                <LoginWithSpotifyButton />
            )}
        </main>
    );
}
