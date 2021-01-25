import styled from "styled-components";
export const RCContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
`;

export const RCWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 50px;
  max-width: 1400px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    padding: 25px;
  }
  /* margin: auto; */
`;

export const Column1 = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
`;

export const Column2 = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 300px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  margin-top: 10px;
  padding-top: 30px;
  width: 100%;
  justify-content: center;
  span {
    color: #c2c6dc;
    position: absolute;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    position: absolute;
    border-radius: 5px;
    padding: 0.8rem;
    width: 100%;
    overflow: hidden;
    font-size: 0.85rem;
    white-space: nowrap;
    cursor: text;
    user-select: none;
    /* top: -1px; */
    pointer-events: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  color: #000;
  /* background-color: #262c49; */
  padding: 0.7rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    outline: none;
    border: 1px solid #2756b3;
  }
  &:focus + span,
  &:valid + span {
    transform: translateY(-40px);
    color: #2756b3;
    padding-left: 0;
  }
`;
export const FormContainer = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
