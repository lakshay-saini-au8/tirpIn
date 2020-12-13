import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { HotelContext } from "../../context/hotelContext";
import { FaRupeeSign } from "react-icons/fa";
import {
  SuggestionWrapper,
  SCard,
  SCardBody,
  SCardFooter,
  SCardImg,
  SCardLoc,
  SCardLocName,
  SCardPrice,
  SCardTitle,
  SCardLocIcon,
  SCardHead,
} from "./SuggestionElements";
const Suggestion = () => {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(HotelContext);
  return (
    <>
      <SCardHead theme={theme}>We Recommed You</SCardHead>
      <SuggestionWrapper>
        {state.suggestion &&
          state.suggestion.map((item) => (
            <SCard key={item._id} theme={theme} to={`/details/${item._id}`}>
              <SCardImg src={item.thumb} />
              <SCardBody>
                <SCardTitle>{item.name}</SCardTitle>
              </SCardBody>
              <SCardFooter>
                <SCardLoc>
                  <SCardLocIcon />
                  <SCardLocName> {item.city_name}</SCardLocName>
                </SCardLoc>
                <SCardPrice>
                  <FaRupeeSign />
                  {item.cost} / day
                </SCardPrice>
              </SCardFooter>
            </SCard>
          ))}
      </SuggestionWrapper>
    </>
  );
};

export default Suggestion;
