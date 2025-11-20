import { Link } from "@/components/ui/Link";
import Modal from "@/components/ui/Modal";
import { PlaylistActions } from "@/features/playlist/components/PlaylistActions";
import { PlaylistSelector } from "@/features/playlist/components/PlaylistSelector";
import { getSavedPlaylist } from "@/features/playlist/services/getSavedPlaylist";
import { getUserPlaylists } from "@/features/user/services/getUserPlaylists";
import Image from "next/image";

export const PlaylistSettingsSection = async () => {
    const savedPlaylist = await getSavedPlaylist();
    const { name, images, external_urls, tracks } = savedPlaylist;
    const { items, total } = await getUserPlaylists();
    return (
        <div className="bg-neutral-800 w-full h-full p-4 rounded-2xl flex flex-col gap-4">
            <div>
                <h2 className="font-semibold text-lg">Playlist</h2>
                <h2 className="text-spotify-grey ">
                    Your top track will be automatically saved to this playlist
                </h2>
            </div>

            {!savedPlaylist.id && (
                <Modal buttonText="Change playlist">
                    <PlaylistSelector playlists={items} total={total} />
                </Modal>
            )}

            {savedPlaylist.id && (
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-row gap-4 min-w-0 grow flex-1">
                        <div className="relative size-32 shrink-0">
                            <Image
                                src={images[0].url}
                                alt="Saved playlist image"
                                fill={true}
                                className="rounded-2xl object-cover"
                            />
                        </div>
                        <div className="min-w-0 flex flex-col justify-center">
                            <Link
                                href={external_urls.spotify}
                                variant="inline"
                                target="_blank"
                            >
                                <span className="text-lg truncate block">
                                    {name}
                                </span>
                            </Link>
                            <p className="text-spotify-grey text-sm">
                                {tracks.total} songs
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <PlaylistActions items={items} total={total} />
                    </div>
                </div>
            )}
        </div>
    );
};
