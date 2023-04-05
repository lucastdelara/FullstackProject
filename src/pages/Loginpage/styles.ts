import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLogin = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  height: 65vh;
  width: 90%;
  max-width: 325px;
  border-radius: 6px;

  .login-header {
    height: 6vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .login-header > h1 {
    color: var(--primary);
    font-size: 22px;
    font-weight: bold;
  }

  .login-label {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 22px;
    height: 40%;
    width: 80%;
    font-size: 12px;
  }

  input {
    border: none;
    height: 45px;
    border-radius: 6px;
    background-color: var(--grey-2);
  }

  input::placeholder {
    color: var(--grey-1);
    padding-left: 15px;
  }

  .login-form {
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-3);
    height: 100%;
  }

  .login-buttons {
    height: 30%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 600px) {
    .login-container {
      justify-content: space-between;
    }
  }
`;

export const LinkRegister = styled(Link)`
  background-color: var(--grey-1);
  color: var(--grey-0);
  border: none;
  border-radius: 4px;
  height: 45px;
  width: 100%;
  font-size: 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--primary-negative);
  }
`;
