import styled from "styled-components";
import { Link } from "react-router-dom";

export const BLCContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 80px);
`;

export const BLCWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 50px;
  max-width: 1400px;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px) {
    padding: 25px;
  }
`;
export const Btn = styled(Link)`
  border: none;
  background-color: #2756b3;
  color: #fff;
  padding: 10px 30px;
  font-size: 16px;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  @media screen and (max-width: 950px) {
    font-size: 10px;
    padding: 8px 13px;
  }
`;

export const BtnStatus = styled.button`
  border: none;
  background-color: #2756b3;
  color: #fff;
  padding: 10px 30px;
  font-size: 16px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 4px auto;
  @media screen and (max-width: 950px) {
    font-size: 10px;
    padding: 8px 13px;
  }
`;
export const CHSelect = styled.select`
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
  /* @media screen and (max-width: 1024px) {
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
  } */
`;
export const CHOption = styled.option``;
export const Input = styled.input`
  width: 100%;
  color: #000;
  /* background-color: #262c49; */
  padding: 0.7rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    outline: none;
    border: 1px solid #2756b3;
  }
  &:focus + span,
  &:valid + span {
    transform: translateY(-40px);
    color: #2756b3;
    padding-left: 0;
  }
`;
