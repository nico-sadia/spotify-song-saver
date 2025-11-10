"use client";

import { useAuth } from "@/features/auth/components/AuthProvider";
import { LoginWithSpotifyButton } from "@/features/auth/components/LoginWithSpotifyButton";

export const Navbar = () => {
    const authenticated = useAuth();
    return (
        <nav className="bg-neutral-950 absolute inset-x-0 top-0 flex flex-row justify-between p-4 items-center">
            <h1 className="font-semibold text-4xl">Spotify Song Saver</h1>
            {authenticated ? <h3>Logged in</h3> : <LoginWithSpotifyButton />}
        </nav>
    );
};
