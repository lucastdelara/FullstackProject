import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  inset: 0;

  .modal-container {
    background-color: var(--grey-3);
    border-radius: 4px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 90%;
    max-width: 300px;
    height: 275px;
    margin: 0 auto;
  }

  .modal-header {
    background-color: var(--grey-2);
    border-radius: 4px 4px 0 0;
    height: 6vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .modal-body {
    border-radius: 0 0 4px 4px;
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 2vh;
  }

  input {
    background-color: var(--grey-3);
    height: 50px;
    width: 260px;
    border-radius: 6px;
  }

  select {
    background-color: var(--grey-3);
    color: var(--grey-1);
    height: 50px;
    width: 100%;
    cursor: pointer;
    border-radius: 6px;
    margin-bottom: 5px;
  }
  &hover {
    background-color: aqua;
  }

  @media (min-width: 600px) {
    .modal-container {
      width: 30%;
      min-width: 300px;
    }
  }
`;
