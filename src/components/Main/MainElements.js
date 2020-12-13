import styled from "styled-components";
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
`;

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 50px;
  max-width: 1400px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    padding: 25px;
  }
  /* margin: auto; */
`;

export const Column1 = styled.div`
  flex-basis: 50%;
  display: flex;
  font-size: 3.5rem;
  font-weight: bold;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;
export const Title = styled.div`
  color: ${({ theme }) => theme.text};
  margin: 15px;
`;
export const Column2 = styled.div`
  flex-basis: 50%;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
