"use client";

import { AuthResponse } from "@/types/api";
import { createContext, ReactNode, useContext, useState } from "react";

const AuthContext = createContext<AuthResponse | undefined>(undefined);

export const AuthProvider = ({
    children,
    initialAuth,
}: {
    children: ReactNode;
    initialAuth: AuthResponse;
}) => {
    const [auth, setAuth] = useState(initialAuth);

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
