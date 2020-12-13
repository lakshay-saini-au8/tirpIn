import styled from "styled-components";
import { Link } from "react-router-dom";
export const QSWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const QSCard = styled(Link)`
  width: calc(50% - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px;
  text-decoration: none;
  @media screen and (max-width: 500px) {
    width: calc(100% - 30px);
  }
`;

export const QSCardImg = styled.img`
  height: 150px;
  width: 100%;
  /* max-width: 250px; */
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const QSCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 2px;
  align-self: flex-start;
`;
export const QSCardTitle = styled.p`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.primaryColor};
`;

export const QSCardDesc = styled.p`
  font-size: 0.5rem;
  font-weight: 500;
  letter-spacing: 0.6px;
  color: #93a3a6;
`;
