import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react"
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/users/UserContext"
import { ContactsContext } from "../../contexts/contacts/ContactsContext";
import { iContact } from "../../contexts/contacts/types";

import { StyledModal } from "./styles";
import { StyledAddOrRemoveButton, StyledPrimaryButton } from "../Button/styles";

const Modal = () => {
  const { setInvisibleModal } = useContext(UserContext);
  const { createContact } = useContext(ContactsContext);

  const contactFormSchema = yup.object().shape({
      name: yup.string().required("Required fiel"),
      contact: yup.string().required("Required field"),
  });

  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm<iContact>({
      resolver: yupResolver(contactFormSchema),
  });

  return (
    <StyledModal>
      <div className="modal-container">
        <div className="modal-header">
          <h3>Cadastrar Contato</h3>
          <StyledAddOrRemoveButton
            onClick={() => setInvisibleModal(false)}
            type="button"
          >
            X
          </StyledAddOrRemoveButton>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit(createContact)}>
            <label htmlFor="name"> Name </label>
            <input
              id="name"
              type="text"
              placeholder="Typescript"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>

            <label htmlFor="contact"> Contact </label>
            <input
              id="contact"
              type="text"
              placeholder="Typescript"
              {...register("contact")}
            />
            <p>{errors.name?.message}</p>

            <StyledPrimaryButton type="submit">
              Register Contact
            </StyledPrimaryButton>
          </form>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;