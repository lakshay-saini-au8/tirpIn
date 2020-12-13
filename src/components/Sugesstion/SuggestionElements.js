import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
export const SuggestionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const SCardHead = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  margin: 15px;
  font-weight: bolder;
  span {
    font-size: 0.8rem;
    font-weight: normal;
  }
`;
export const SCard = styled(Link)`
  max-width: calc(25% - 30px);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  margin: 15px;
  border-radius: 10px;
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadow};
  @media screen and (max-width: 950px) {
    max-width: calc(50% - 30px);
  }
  @media screen and (max-width: 500px) {
    max-width: calc(100% - 30px);
  }
`;

export const SCardImg = styled.img`
  width: 100%;
  height: 130px;
  border-radius: 10px 10px 0 0;
`;

export const SCardBody = styled.div`
  display: flex;
  padding: 13px 9px;
  color: #2756b3;
  font-weight: bold;
`;
export const SCardTitle = styled.p`
  white-space: nowrap;
  width: calc(100% - 20px);
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  padding: 0 9px;
  padding-bottom: 10px;
`;
export const SCardLoc = styled.div`
  display: flex;
  align-items: center;
  color: #93a3a6;
`;
export const SCardLocIcon = styled(HiLocationMarker)`
  margin-right: 2px;
`;
export const SCardLocName = styled.p``;
export const SCardPrice = styled.p`
  display: flex;
  align-items: center;
`;
