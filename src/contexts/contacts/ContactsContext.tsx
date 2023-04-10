import { createContext } from "react";
import { iContact, iContactContext, iContactFormData, iContactsProviderProps, iIdContact } from "./types";
import { useState } from "react";
import api from "../../services/api";

export const ContactsContext = createContext({} as iContactContext);

export const ContactsProvider = ({ children }: iContactsProviderProps) => {
    const [contacts, setContacts] = useState([] as iContact[]);

    async function createContact(data: iContactFormData) {
        try {
            const token = localStorage.getItem("FPToken");

            api.defaults.headers.authorization = `Bearer ${token}`;
            const apiResponse = await api.post("/users/contacts", data);
            setContacts([...contacts, apiResponse.data]);
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteContact(idContact:iIdContact) {
        try {
            const newList = contacts.filter((element) => element.id !== idContact.id);
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