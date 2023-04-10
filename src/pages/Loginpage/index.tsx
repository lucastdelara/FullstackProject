import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/users/UserContext";
import { iLoginFormData } from "../../contexts/users/types";
import * as yup from "yup";

import { StyledLogin, LinkRegister } from "./styles";
import { StyledPrimaryButton } from "../../components/Button/styles";

const Login = () => {
  const { loginUser } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <StyledLogin className="login-container">
      <div className="login-header">
        <h1>Full Stack Project</h1>
      </div>
      <form className="login-form" onSubmit={handleSubmit(loginUser)}>
        <h2 className="card-title">Login</h2>

        <div className="login-label">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Enter you e-mail"
            {...register("email")}
          />
          {errors.email?.message}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password?.message}
        </div>

        <div className="login-buttons">
        <StyledPrimaryButton type="submit">Login</StyledPrimaryButton>
          <p>Create a new account</p>

          <LinkRegister to="/register">Register</LinkRegister>
        </div>
      </form>
    </StyledLogin>
  );
};
export default Login;
