import React from "react";
import Filter from "../Filter";
import HotelListCard from "../HotelListCard";
import Suggestion from "../Sugesstion";
import { HLFContainer, HLFFilter, HLFSection, HLFWrapper } from "./HLFElements";
const HotelListFinal = () => {
  return (
    <HLFContainer>
      <HLFWrapper>
        <HLFFilter>
          <Filter />
        </HLFFilter>
        <HLFSection>
          <Suggestion />
          <HotelListCard />
        </HLFSection>
      </HLFWrapper>
    </HLFContainer>
  );
};

export default HotelListFinal;
