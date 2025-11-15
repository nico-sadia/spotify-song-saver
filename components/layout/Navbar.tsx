"use client";

import { useAuth } from "@/features/auth/components/AuthProvider";
import { LoginWithSpotifyButton } from "@/features/auth/components/LoginWithSpotifyButton";
import { UserBadge } from "@/features/user/components/UserBadge";
import { getUserProfile } from "@/features/user/services/getUserProfile";
import { UserProfile } from "@/types/spotify";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [userProfile, setUserProfile] = useState<UserProfile>();

    useEffect(() => {
        (async () => {
            setUserProfile(await getUserProfile());
        })();
    }, []);

    const links = [
        { name: "Spotify Song Saver", path: "/" },
        { name: "Dashboard", path: "/dashboard" },
    ];

    const auth = useAuth();
    const isAuthenticated = auth?.isAuthenticated;

    const currentPath = usePathname();

    return (
        <nav className="bg-neutral-950 absolute inset-x-0 top-0 flex flex-row gap-6 px-4 h-16 items-center">
            {links.map((link) => (
                <Link href={link.path} key={link.name}>
                    <span
                        className={
                            currentPath === link.path
                                ? "text-spotify-light-green"
                                : ""
                        }
                    >
                        {link.name}
                    </span>
                </Link>
            ))}
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
