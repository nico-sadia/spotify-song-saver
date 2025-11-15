import Image from "next/image";

type UserBadgeProps = {
    displayName: string;
    imageUrl: string | null;
};

export const UserBadge = ({ displayName, imageUrl }: UserBadgeProps) => {
    return (
        <div className="flex flex-row gap-4 items-center">
            <h3>{displayName}</h3>
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="User profile image"
                    height={48}
                    width={48}
                    className="rounded-full"
                />
            )}
        </div>
    );
};
