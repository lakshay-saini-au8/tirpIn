import styled from "styled-components";
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
