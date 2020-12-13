import React, { useContext } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { ThemeContext } from "styled-components";
import { HotelContext } from "../../context/hotelContext";

import {
  HLCAddress,
  HLCBtn,
  HLCCard,
  HLCFooter,
  HLCImg,
  HLCPrice,
  HLCTitle,
  HLCType,
  HLCWrapper,
  HCLBody,
  HLCTop,
  HLCHead,
} from "./HLCElements";
const HotelListCard = () => {
  const { state } = useContext(HotelContext);
  const { theme } = useContext(ThemeContext);
  return (
    <HLCWrapper>
      <HLCHead theme={theme}>
        Hotels <span>{state.hotelList && state.hotelList.length} results</span>
      </HLCHead>
      {state.hotelList &&
        state.hotelList.map((item) => (
          <HLCCard key={item._id} theme={theme}>
            <HLCImg src={item.thumb} />
            <HCLBody>
              <HLCTop>
                <HLCTitle>{item.name}</HLCTitle>
                <HLCAddress>{item.address}</HLCAddress>
                <HLCType>
                  <p>{Math.floor(Math.random() * 2) + 1} Guest</p>
                  <p> {Math.floor(Math.random() * 3) + 1} Bedroom</p>
                  <p>{Math.floor(Math.random() * 1) + 1} Bathroom</p>
                </HLCType>
              </HLCTop>
              <HLCFooter>
                <HLCPrice>
                  <FaRupeeSign /> {item.cost} / day
                </HLCPrice>
                <HLCBtn to={`/details/${item._id}`}>More Details</HLCBtn>
              </HLCFooter>
            </HCLBody>
          </HLCCard>
        ))}
    </HLCWrapper>
  );
};

export default HotelListCard;
