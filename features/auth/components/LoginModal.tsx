import Modal from "@/components/ui/Modal";

export const LoginModal = () => {
    return (
        <Modal buttonText="Get started">
            <div className="flex flex-col items-center">
                <h1 className="font-semibold text-2xl">Login with Spotify</h1>
                <p className="text-spotify-grey">Please login to continue</p>
            </div>
        </Modal>
    );
};
