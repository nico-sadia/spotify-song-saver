"use client";

import { Link } from "@/components/ui/Link";
import { useAuth } from "@/features/auth/components/AuthProvider";
import { LoginWithSpotifyButton } from "@/features/auth/components/LoginWithSpotifyButton";
import { UserBadge } from "@/features/user/components/UserBadge";
import { useUserProfile } from "@/features/user/components/UserProfileProvider";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const links = [
        { name: "Spotify Song Saver", path: "/" },
        { name: "Dashboard", path: "/dashboard" },
    ];
    const currentPath = usePathname();

    const auth = useAuth();
    const isAuthenticated = auth?.isAuthenticated;

    const userProfile = useUserProfile();

    return (
        <nav className="bg-neutral-900 absolute inset-x-0 top-0 flex flex-row gap-6 px-4 h-16 items-center">
            {links.map((link) => (
                <Link
                    href={link.path}
                    key={link.name}
                    active={currentPath === link.path}
                >
                    {link.name}
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
