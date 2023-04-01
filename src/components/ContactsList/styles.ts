import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  height: 67vh;
  width: 90%;
  max-width: 572px;
  background-color: var(--grey-2);
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
`;

export const StyledLi = styled.li`
  background-color: var(--grey-4);
  height: 50px;
  width: 95%;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  cursor: pointer;
  > div {
    height: 100%;
    width: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
  }
  &:hover {
    background-color: var(--grey-3);
  }

  > div > p {
    margin-right: 20px;
  }

  > h3 {
    margin-left: 20px;
  }

  @media (min-width: 600px) {
    width: 96%;
  }
`;
