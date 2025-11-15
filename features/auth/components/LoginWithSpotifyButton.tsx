import Button from "@/components/ui/Button";
import { AUTH_LOGIN_URL } from "@/config/urls";

export const LoginWithSpotifyButton = () => {
    return (
        <a href={AUTH_LOGIN_URL}>
            <Button variant="primary" size="md">
                Login with Spotify
            </Button>
        </a>
    );
};
