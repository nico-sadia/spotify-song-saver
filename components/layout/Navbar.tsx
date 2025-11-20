import { Link } from "@/components/ui/Link";
import { LoginWithSpotifyButton } from "@/features/auth/components/LoginWithSpotifyButton";
import { getAuthStatus } from "@/features/auth/services/getAuthStatus";
import { UserBadge } from "@/features/user/components/UserBadge";
import { getUserProfile } from "@/features/user/services/getUserProfile";

export const Navbar = async () => {
    const links = [
        { name: "Spotify Song Saver", path: "/" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Settings", path: "/settings" },
    ];

    const auth = await getAuthStatus();
    const isAuthenticated = auth.isAuthenticated;
    const userProfile = await getUserProfile();

    return (
        <nav className="bg-neutral-900 absolute inset-x-0 top-0 flex flex-row gap-6 px-4 h-16 items-center">
            {links.map((link) => (
                <Link href={link.path} key={link.name}>
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
