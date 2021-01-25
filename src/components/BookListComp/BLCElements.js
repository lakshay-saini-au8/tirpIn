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
