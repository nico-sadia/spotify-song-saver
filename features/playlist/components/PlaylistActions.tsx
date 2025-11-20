"use client";

import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { Playlist } from "@/types/spotify";
import { PlaylistSelector } from "./PlaylistSelector";

type PlaylistActionsProps = {
    items: Playlist[];
    total: number;
};

export const PlaylistActions = ({ items, total }: PlaylistActionsProps) => {
    return (
        <div className="flex flex-col gap-2 w-2/3 max-sm:w-full">
            <Modal
                buttonText="Change playlist"
                variant={"secondary"}
                size={"md"}
            >
                <PlaylistSelector playlists={items} total={total} />
            </Modal>
            <Button variant={"danger"} size={"md"}>
                Remove playlist
            </Button>
        </div>
    );
};
