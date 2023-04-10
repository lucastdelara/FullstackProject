import { Dispatch, ReactNode } from "react";

export interface iContactsProviderProps {
    children: ReactNode;
}

export interface iContactFormData {
    name: string;
    contact: string;
    register_date: string;
}

export interface iContact {
    id: string;
    name: string;
    contact: string;
    register_date: string;
}

export interface iIdContact {
    id: string;
}

export interface iContactContext {
    createContact: (data: iContact) => Promise<void>;
    deleteContact: (data: iIdContact) => Promise<void>;
    contacts: iContact[];
    setContacts: Dispatch<React.SetStateAction<iContact[]>>;
}