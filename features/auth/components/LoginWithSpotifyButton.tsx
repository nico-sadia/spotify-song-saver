const spotifyLoginUrl = "http://localhost:3080/auth/login";

export const LoginWithSpotifyButton = () => {
    return (
        <a href={spotifyLoginUrl}>
            <button className="p-4 bg-green-500 rounded-2xl cursor-pointer hover:bg-green-600">
                Login with Spotify
            </button>
        </a>
    );
};
