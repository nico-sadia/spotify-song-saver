"use client";

import { UserProfile } from "@/types/spotify";
import { createContext, ReactNode, useContext, useState } from "react";

const UserProfileContext = createContext<UserProfile | undefined>(undefined);

export const UserProfileProvider = ({
    children,
    initialUserProfile,
}: {
    children: ReactNode;
    initialUserProfile: UserProfile;
}) => {
    const [userProfile, setUserProfile] = useState(initialUserProfile);

    return (
        <UserProfileContext.Provider value={userProfile}>
            {children}
        </UserProfileContext.Provider>
    );
};

export const useUserProfile = () => useContext(UserProfileContext);
