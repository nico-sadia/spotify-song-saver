"use client";

import { createContext, ReactNode, useContext } from "react";

const AuthContext = createContext<boolean>(false);

export const AuthProvider = ({
    children,
    initialAuth,
}: {
    children: ReactNode;
    initialAuth: boolean;
}) => {
    return (
        <AuthContext.Provider value={initialAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
