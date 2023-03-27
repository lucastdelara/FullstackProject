import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";

// import api from "../services/api";

export interface iUserProviderProps {
    children: ReactNode;
}

// export interface iApiError {
//     status?: string;
//     message?: string | [];
// }

export interface iRegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    contact: string;
    register_date: string;
}

export interface iLoginFormData {
    email: string;
    password: string;
}

export interface iUser {
    id: string;
    name: string;
    email: string;
    contact: string;
    register_date: string;
}

export interface iModal {
    title: string;
    status: string;
}

export interface iUserContext {
    registerUser: (data: iRegisterFormData) => Promise<void>;
    token: string | null;
    user: iUser | null;
    loginUser: (data: iLoginFormData) => Promise<void>;
    loading: boolean;
    invisibleModal: boolean;
    setInvisibleModal: Dispatch<React.SetStateAction<boolean>>;
}