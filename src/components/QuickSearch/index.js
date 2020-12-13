import React, { useContext } from "react";
import { HotelContext } from "../../context/hotelContext";
import { useTheme } from "../../customHook/useTheme";
import {
  QSWrapper,
  QSCard,
  QSCardBody,
  QSCardDesc,
  QSCardImg,
  QSCardTitle,
} from "./QSElements";
const QuickSearch = () => {
  const { theme } = useTheme();
  const { state } = useContext(HotelContext);
  return (
    <QSWrapper>
      {state.quickSearch &&
        state.quickSearch.map((item) => (
          <QSCard key={item._id} to={`/list/${item.trip}`}>
            <QSCardImg src={item.image} theme={theme} />
            <QSCardBody>
              <QSCardTitle theme={theme}>{item.name}</QSCardTitle>
              <QSCardDesc>Start your trip in {item.name} style</QSCardDesc>
            </QSCardBody>
          </QSCard>
        ))}
    </QSWrapper>
  );
};

export default QuickSearch;
