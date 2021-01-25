import { useUserContext } from "../../customHook/useUserContext";
import { BLCContainer, BLCWrapper } from "./BLCElements";

const BookListComp = () => {
  const { state, dispatch } = useUserContext();
  const { allBookings } = state;
  return (
    <BLCContainer>
      <BLCWrapper>
        {allBookings.length === 0
          ? "No Booking Till Now"
          : allBookings.map((item) => (
              <table>
                <thead>
                  <tr></tr>
                </thead>
              </table>
            ))}
      </BLCWrapper>
    </BLCContainer>
  );
};

export default BookListComp;
