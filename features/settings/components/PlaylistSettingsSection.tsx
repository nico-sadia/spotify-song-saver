import Modal from "@/components/ui/Modal";
import { PlaylistActions } from "@/features/playlist/components/PlaylistActions";
import { PlaylistBadge } from "@/features/playlist/components/PlaylistBadge";
import { PlaylistSelector } from "@/features/playlist/components/PlaylistSelector";
import { getSavedPlaylist } from "@/features/playlist/services/getSavedPlaylist";
import { getUserPlaylists } from "@/features/playlist/services/getUserPlaylists";

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
                <div className="flex items-center gap-4">
                    <Modal buttonText="Select playlist" size={"lg"}>
                        <PlaylistSelector playlists={items} total={total} />
                    </Modal>
                    <p className="text-spotify-grey text-sm">
                        Please select a playlist to start saving songs
                    </p>
                </div>
            )}

            {savedPlaylist.id && (
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <PlaylistBadge
                            name={name}
                            images={images}
                            external_urls={external_urls}
                        />
                    </div>
                    <div className="flex flex-1 justify-center items-center">
                        <PlaylistActions items={items} total={total} />
                    </div>
                </div>
            )}
        </div>
    );
};
