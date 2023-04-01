import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext, iRegisterFormData } from "../../contexts/UserContext";
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
          <LinkLogin to="/login"> Voltar </LinkLogin>
        </nav>

        <form className="register-form" onSubmit={handleSubmit(registerUser)}>
          <div className="register-header">
            <h2>Crie sua conta</h2>
          </div>

          <div className="register-label">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name?.message}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email?.message}

            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message}

            <label htmlFor="confirm-password">Confirmar senha</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("password")}
            />
            {errors.password?.message}

            <label htmlFor="contact">Contato</label>
            <input
              id="contact"
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            {errors.contact?.message}
          </div>

          <div className="register-buttons">
            <StyledPrimaryButton type="submit">Cadastrar</StyledPrimaryButton>
          </div>
        </form>
      </StyledRegister>
    </>
  );
};
export default Register;
