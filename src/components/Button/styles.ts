import styled from "styled-components"

export const StyledPrimaryButton = styled.button`
  background-color: var(--grey-0);
  color: var(--grey-0);
  border: none;
  height: 45px;
  width: 100%;
  font-size: 12px;
  margin-bottom: 15px;

  &:hover {
    background-color: var(--primary-negative);
  }
`;

export const StyledSecondaryButton = styled.button`
  background-color: var(--grey-1);
  color: var(--grey-0);
  border: none;
  height: 45px;
  width: 100%;
  font-size: 12px;
`;

export const StyledBackButton = styled.button`
  background-color: var(--grey-2);
  color: var(--grey-0);
  border: none;
  height: 30px;
  width: 50px;
  font-size: 10px;

  &:hover {
    background-color: var(--grey-1);
  }
`;

export const StyledAddOrRemoveButton = styled.button`
  background-color: var(--grey-2);
  color: var(--grey-0);
  border: none;
  height: 30px;
  width: 30px;
  font-size: 20px;
`;
