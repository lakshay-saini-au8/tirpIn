import styled from "styled-components";
import { Link } from "react-router-dom";
export const HLCWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HLCHead = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  margin: 15px;
  font-weight: bolder;
  span {
    font-size: 0.8rem;
    font-weight: normal;
  }
`;

export const HLCCard = styled.div`
  width: calc(100% - 30px);
  display: flex;
  margin: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const HLCImg = styled.img`
  width: 250px;
  height: 180px;
  border-radius: 10px 0 0 10px;
  margin-right: 20px;
  @media screen and (max-width: 950px) {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;
export const HCLBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  flex-grow: 1;
`;
export const HLCTop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HLCTitle = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  color: #2756b3;
  padding-bottom: 5px;
  @media screen and (max-width: 950px) {
    font-size: 1.2rem;
  }
`;
export const HLCAddress = styled.p`
  font-size: 0.8rem;
  padding-bottom: 5px;
  color: #93a3a6;
  @media screen and (max-width: 950px) {
    font-size: 0.7rem;
  }
`;
export const HLCType = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 10px;
    padding-right: 10px;
    color: #93a3a6;
    font-weight: bold;
  }
`;

export const HLCFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;
export const HLCPrice = styled.p`
  display: flex;
  align-items: center;
  @media screen and (max-width: 950px) {
    font-size: 10px;
  }
`;
export const HLCBtn = styled(Link)`
  border: none;
  background-color: #2756b3;
  color: #fff;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 5px;
  margin-right: 10px;
  text-decoration: none;
  @media screen and (max-width: 950px) {
    font-size: 10px;
    padding: 8px 13px;
  }
`;
