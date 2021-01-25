import { useTheme } from "../../customHook/useTheme";
import { useUserContext } from "../../customHook/useUserContext";
import { updateStatus } from "../../utils/api";
import { BLCContainer, BLCWrapper, Btn, BtnStatus } from "./BLCElements";

const BookListComp = ({ bookingState, setBookingState }) => {
  const { state, dispatch } = useUserContext();
  const { theme } = useTheme();
  const { allBookings, userInfo } = state;
  const handleAction = async (e) => {
    const { data } = await updateStatus(
      e.target.dataset.id,
      e.target.dataset.status,
      userInfo.user.token
    );
    const { booking } = data;
    if (booking) {
      dispatch({ type: "RESET_ALLBOOKING_DETAILS", payload: null });
      setBookingState(!bookingState);
    }
  };
  return (
    <BLCContainer>
      <BLCWrapper>
        {userInfo.user.role === "admin" ? (
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginBottom: "20px",
            }}
          >
            <Btn to="/allBooking" theme={theme}>
              All
            </Btn>
            <Btn to="/allBooking?q=active" theme={theme}>
              Active
            </Btn>
            <Btn to="/allBooking?q=completed" theme={theme}>
              Completed
            </Btn>
          </div>
        ) : null}
        {allBookings.length === 0 ? (
          "No Booking Till Now"
        ) : (
          <table
            border="1"
            style={{ background: "#fff", width: "100%", textAlign: "center" }}
          >
            <thead>
              <tr>
                <th>Hotel Name</th>
                <th>City Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                {userInfo.user.role === "admin" ? (
                  <>
                    <td>Customer Name</td> <td>Booking Status</td>
                    <td>Action</td>
                  </>
                ) : (
                  <th>Status</th>
                )}
              </tr>
            </thead>
            <tbody onClick={handleAction}>
              {allBookings.map((item) => (
                <tr key={item._id}>
                  <td>{item.hotelName}</td>
                  <td>{item.cityName}</td>
                  <td>{item.price}</td>
                  <td>{item.bookingDate.split("T")[0]}</td>
                  {userInfo.user.role === "admin" ? (
                    <>
                      <td>{item.userId.name}</td>

                      <td>{item.isAccepted ? "Confirm" : "Not Confirmed"}</td>
                      <td>
                        <BtnStatus
                          data-id={item._id}
                          data-status={!item.isAccepted ? "accept" : "rejected"}
                          theme={theme}
                        >
                          {item.isAccepted ? "Reject" : "Accept"}
                        </BtnStatus>
                      </td>
                    </>
                  ) : (
                    <td>{item.isAccepted ? "Confirm" : "Not Confirmed"}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </BLCWrapper>
    </BLCContainer>
  );
};

export default BookListComp;
