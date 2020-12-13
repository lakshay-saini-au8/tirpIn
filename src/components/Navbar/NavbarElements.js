import styled from "styled-components";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: transparent;
`;

export const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 50px;
  height: 80px;
  align-items: center;
  max-width: 1400px;
  @media screen and (max-width: 500px) {
    padding: 25px;
  }
`;

export const NavLogo = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-size: 35px;
  text-decoration: none;
  font-weight: 700;
  span {
    color: #2756b3;
  }
`;

export const ThemeBtnDark = styled(HiLightBulb)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 3rem;
  cursor: pointer;
`;

export const ThemeBtnLight = styled(HiOutlineLightBulb)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 3rem;
  cursor: pointer;
`;
