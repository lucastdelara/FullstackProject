import { createContext, Dispatch, ReactNode, useState } from "react";
// import api

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

export const ContactsContext = createContext({} as iContactContext);

export const ContactsProvider = ({ children }: iContactsProviderProps) => {
    const [contacts, setContacts] = useState([] as iContact[]);

    async function createContact(data: iContactFormData) {
        try {
            const token = localStorage.getItem("FPToken");

            // api.defaults.headers.authorization = `Bearer ${token}`;
            // const apiResponse = await api.post("/users/contacts", data);
            // setContacts([...contacts, apiResponse.data]);
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteContact(idContact:iIdContact) {
        try {
            const newList = contacts.filter((element) => element.id !== idTech.id);
            const token = localStorage.getItem("FPToken");
      
            api.defaults.headers.authorization = `Bearer ${token}`;
            await api.delete(`/users/contacts/${idContact.id}`);
            setContacts(newList);
          } catch (error) {
            console.log(error);
        }
    }

    return (
        <ContactsContext.Provider
            value={{
                createContact,
                deleteContact,
                contacts,
                setContacts,
            }}
        >
            {children}
        </ContactsContext.Provider>
    );
};