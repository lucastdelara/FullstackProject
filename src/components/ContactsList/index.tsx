import { useContext } from "react";
import { ContactsContext } from "../../contexts/ContactsContext";
import { StyledAddOrRemoveButton } from "../Button/styles";

import { StyledUl, StyledLi } from "./styles";

const ContactsList = () => {
    const { contacts, deleteContact } = useContext(ContactsContext);

    return (
        <StyledUl>
        {contacts.length > 0 ? (
          contacts.map((el) => (
            <StyledLi key={el.id}>
              <h3>{el.name}</h3>
              <div>
                <p>{el.contact}</p>
                <StyledAddOrRemoveButton onClick={() => deleteContact(el)}>
                  X
                </StyledAddOrRemoveButton>
              </div>
            </StyledLi>
          ))
        ) : (
          <p>Add Contacts</p>
        )}
      </StyledUl>
    );
};

export default ContactsList;