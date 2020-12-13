import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
`;
export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 670px) {
    flex-direction: row;
  }
`;

export const FilterSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  @media screen and (max-width: 670px) {
    margin-right: 15px;
  }
  p {
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  label {
    font-size: 0.8rem;
    padding: 2px;
    color: ${({ theme }) => theme.text};
    input {
      margin-right: 8px;
    }
  }
`;
