"use client";

import { useAuth } from "@/features/auth/components/AuthProvider";
import { LoginWithSpotifyButton } from "@/features/auth/components/LoginWithSpotifyButton";
import { UserBadge } from "@/features/user/components/UserBadge";
import { getUserProfile } from "@/features/user/services/getUserProfile";
import { UserProfile } from "@/types/spotify";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [userProfile, setUserProfile] = useState<UserProfile>();

    useEffect(() => {
        (async () => {
            setUserProfile(await getUserProfile());
        })();
    }, []);

    const auth = useAuth();
    const isAuthenticated = auth?.isAuthenticated;

    return (
        <nav className="bg-neutral-950 absolute inset-x-0 top-0 flex flex-row gap-8 p-4 h-16 items-center">
            <Link href="/">Spotify Song Saver</Link>
            <Link href="/dashboard">Dashboard</Link>
            <div className="ml-auto">
                {!isAuthenticated && <LoginWithSpotifyButton />}

                {isAuthenticated && userProfile && (
                    <UserBadge
                        displayName={userProfile.display_name}
                        imageUrl={userProfile.images[0].url}
                    />
                )}
            </div>
        </nav>
    );
};
