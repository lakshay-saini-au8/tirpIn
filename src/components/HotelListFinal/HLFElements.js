import styled from "styled-components";

export const HLFContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 80px);
`;

export const HLFWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 50px;
  max-width: 1400px;
  @media screen and (max-width: 670px) {
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    padding: 25px;
  }
`;

export const HLFFilter = styled.div`
  margin-top: 20px;
  width: 450px;
`;

export const HLFSection = styled.div``;
