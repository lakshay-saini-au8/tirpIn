import React from "react";
import { useTheme } from "../../customHook/useTheme";
import CityHotelDropDown from "../CityHotelDropDown";
import QuickSearch from "../QuickSearch";
import {
  MainContainer,
  MainWrapper,
  Column1,
  Column2,
  Title,
} from "./MainElements";
const Main = () => {
  const { theme } = useTheme();
  return (
    <MainContainer>
      <MainWrapper>
        <Column1>
          <Title theme={theme}>Let's make your best trip ever!</Title>
          <CityHotelDropDown />
        </Column1>
        <Column2>
          <QuickSearch />
        </Column2>
      </MainWrapper>
    </MainContainer>
  );
};

export default Main;
