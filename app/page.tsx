import { LoginModal } from "@/features/auth/components/LoginModal";

export default async function Home() {
    return (
        <main className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-5xl font-bold text-spotify-green">
                Spotify Song Saver
            </h1>
            <p className="text-lg">
                Your top Spotify tracks - saved for you daily
            </p>
            <LoginModal />
        </main>
    );
}
