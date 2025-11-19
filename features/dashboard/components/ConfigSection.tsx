import Button from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
import Modal from "@/components/ui/Modal";
import { PlaylistSelector } from "@/features/playlist/components/PlaylistSelector";
import { getSavedPlaylist } from "@/features/playlist/services/getSavedPlaylist";
import Image from "next/image";

export const ConfigSection = async () => {
    const { name, images, external_urls, tracks, owner } =
        await getSavedPlaylist();

    return (
        <div className="flex-3/4 bg-neutral-800 w-full h-full p-4 rounded-2xl flex flex-col gap-4">
            <div>
                <h2 className="font-semibold text-lg">Configuration</h2>
                <h2 className="text-spotify-grey ">
                    Your top track will be automatically saved to this playlist
                </h2>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-row gap-4 flex-1">
                    <Image
                        src={images[0].url}
                        alt="Saved playlist image"
                        height={256}
                        width={256}
                        className="rounded-2xl"
                    />
                    <div>
                        <Link
                            href={external_urls.spotify}
                            variant="inline"
                            target="_blank"
                        >
                            <span className="text-lg">{name}</span>
                        </Link>
                        <p>{tracks.total} songs</p>
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-4">
                    <Modal buttonText="Change playlist">
                        <PlaylistSelector />
                    </Modal>
                    <Button variant={"danger"}>Remove playlist</Button>
                </div>
            </div>
        </div>
    );
};
