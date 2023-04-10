import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/users/UserContext";
import { iRegisterFormData } from "../../contexts/users/types";
import * as yup from "yup";

import { StyledRegister, LinkLogin } from "./styles";
import { StyledPrimaryButton } from "../../components/Button/styles";

const Register = () => {
  const { registerUser } = useContext(UserContext);

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        regex,
        "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
      ),
    confirmPassword: yup
      .string()
      .oneOf([
        yup.ref("password"),
        "Confirmação de senha deve ser igual a senha",
      ]),
    name: yup.string().required("Campo obrigatório"),
    bio: yup.string(),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <StyledRegister className="register-container">
        <nav className="register-nav">
          <h1>Fullstack Project</h1>
          <LinkLogin to="/login"> Back </LinkLogin>
        </nav>

        <form className="register-form" onSubmit={handleSubmit(registerUser)}>
          <div className="register-header">
            <h2>Register</h2>
          </div>

          <div className="register-label">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            {errors.name?.message}

            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              {...register("email")}
            />
            {errors.email?.message}

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password?.message}

            <label htmlFor="confirm-password">Confirm password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message}

            <label htmlFor="contact">Contact</label>
            <input
              id="contact"
              type="text"
              placeholder="Contact"
              {...register("contact")}
            />
            {errors.contact?.message}
          </div>

          <div className="register-buttons">
            <StyledPrimaryButton type="submit">Register</StyledPrimaryButton>
          </div>
        </form>
      </StyledRegister>
    </>
  );
};
export default Register;
