import styled from "styled-components";

export const CHform = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const CHSelect = styled.select`
  flex-basis: calc(50% - 30px);
  max-width: calc(50% - 30px);
  margin: 15px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bodyBackground};
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.shadow};
  border: none;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 1024px) {
    flex-basis: calc(90% - 30px);
    max-width: calc(90% - 30px);
  }
  @media screen and (max-width: 768px) {
    flex-basis: calc(50% - 30px);
    max-width: calc(50% - 30px);
  }
  @media screen and (max-width: 568px) {
    flex-basis: calc(100% - 30px);
    max-width: calc(100% - 30px);
  }
`;
export const CHOption = styled.option``;
