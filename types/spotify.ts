export type UserProfile = {
    display_name: string;
    email: string;
    followers: UserFollowers;
    href: string;
    id: string;
    uri: string;
    images: SpotifyImage[];
};

type UserFollowers = {
    href: string | null;
    total: number;
};

type SpotifyImage = {
    height: number;
    url: string;
    width: number;
};
