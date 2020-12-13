import React, { useContext } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { ThemeContext } from "styled-components";
import { HotelContext } from "../../context/hotelContext";

import {
  HDSAddress,
  HDSContanier,
  HDSCost,
  HDSDesc,
  HDSImg,
  HDSImgWrapper,
  HDSInfoWrapper,
  HDSTitle,
  HDSWrapper,
  Roomtype,
} from "./HDSElements";
const HotelDetailsSingle = () => {
  const { state } = useContext(HotelContext);
  const { theme } = useContext(ThemeContext);
  const { cost, type, thumb, name, locality, address } = state.hotelDetails[0];
  return (
    <HDSContanier>
      <HDSWrapper>
        <HDSImgWrapper>
          <Roomtype theme={theme}>
            {type.map((item) => (
              <p key={item.roomtype}>{item.name}</p>
            ))}
          </Roomtype>
          <HDSImg src={thumb} theme={theme} />
        </HDSImgWrapper>
        <HDSInfoWrapper>
          <HDSCost theme={theme}>
            <p>
              <FaRupeeSign />
              {cost} / day
            </p>
          </HDSCost>
          <HDSTitle>{name}</HDSTitle>
          <HDSDesc theme={theme}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </HDSDesc>

          <HDSAddress theme={theme}>
            <p>+919870771537</p>
            <p>{locality}</p>
            <p>{address}</p>
          </HDSAddress>
        </HDSInfoWrapper>
      </HDSWrapper>
    </HDSContanier>
  );
};

export default HotelDetailsSingle;
