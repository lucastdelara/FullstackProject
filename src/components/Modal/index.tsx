import { yupResolver } from "@hookform/resolver/yup";
import * as yup from "yup";
import { useContext } from "react"
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext"
import { iContact, ContactsContext } from "../../contexts/ContactsContext";

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
            <label htmlFor="title"> Nome </label>
            <input
              id="title"
              type="text"
              placeholder="Typescript"
              {...register("title")}
            />
            <p>{errors.title?.message}</p>

            <label htmlFor="status"> Selecionar status </label>
            <select defaultValue="Iniciante" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <p>{errors.status?.message}</p>

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