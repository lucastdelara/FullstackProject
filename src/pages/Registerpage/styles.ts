import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledRegister = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex start;
  text-align: center;
  height: 99vh;
  width: 90%;
  max-width: 300px;

  .register-nav {
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }

  .register-nav > h1 {
    color: var(--primary);
    font-size: 22px;
    font-weight: bold;
  }

  .register-form {
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--grey-3);
    height: 80%;
  }

  .register-header {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 25px;
  }

  .register-label {
    margin: 15px 0 15px 0;
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 87%;
    font-size: 12px;
    gap: 9px;
  }

  input {
    border: none;
    height: 40px;
    border-radius: 6px;
    background-color: var(--grey-2);
  }

  input::placeholder {
    color: var(--grey-1);
    padding-left: 15px;
  }

  .register-buttons {
    height: 30%;
    width: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LinkLogin = styled(Link)`
  background-color: var(--grey-3);
  color: var(--grey-0);
  border: none;
  border-radius: 4px;
  height: 35px;
  width: 18%;
  font-size: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--grey-1);
  }
`;
