import styled from "styled-components";

export const HDSContanier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
`;

export const HDSWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 25px 50px;
  max-width: 1400px;
  @media screen and (max-width: 500px) {
    padding: 25px;
  }
`;

export const HDSImgWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Roomtype = styled.div`
  display: flex;
  position: absolute;
  p {
    background: #2756b3;
    margin: 8px;
    padding: 5px 10px;
    border-radius: 5px;
    color: #ffff;
    box-shadow: ${({ theme }) => theme.shadow};
    @media screen and (max-width: 500px) {
      font-size: 0.6rem;
      margin: 6px;
      padding: 5px 10px;
    }
  }
`;

export const HDSImg = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  @media screen and (max-width: 500px) {
    height: 250px;
  }
`;

export const HDSInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HDSCost = styled.div`
  display: flex;
  align-items: center;
  p {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.text};
    margin: 8px 0;
    font-size: 0.8rem;
    padding: 5px 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.bodyBackground};
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;
export const HDSTitle = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: #2756b3;
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;
export const HDSDesc = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 0.8rem;
  line-height: 26px;
  letter-spacing: 1.1px;
  margin: 20px 0;
`;
export const HDSAddress = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
