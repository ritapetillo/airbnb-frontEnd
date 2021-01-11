import React, { useState, useContext, useEffect, useMemo } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../style/Bookings.css";
import StarIcon from "@material-ui/icons/Star";
import AppContext from "../context/app-context";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import moment from "moment";

function Bookings({ location, history }) {
  const [listing, setListing] = useState();
  const { user, prevBookings, retrieveCurrentUserBookings } = useContext(
    AppContext
  );
  console.log(location);
  const setUpBookings = async () => {
    const bookings = await retrieveCurrentUserBookings();
    console.log(prevBookings);
  };
  useEffect(() => {
    setUpBookings();
  }, []);

  return (
    <Container className="confirmBooking">
      <Row>
        <h2 className="mt-5 mb-5">
          <ArrowBackIosIcon
            onClick={() => history.goBack()}
            style={{ cursor: "pointer" }}
          />{" "}
          Bookings List
        </h2>
      </Row>
      <Row>
        <Col
          sm={12}
          md={{
            size: 5,
          }}
        >
          <Row>
            <h4>{user && user.firstName}, those are your last bookings</h4>
          </Row>
          <Row className="mt-4 flex-column">
            <span className="divider-lg mt-0 mb-4"></span> <h4>Your Trips</h4>
          </Row>
          <Row>
            {prevBookings &&
              prevBookings.map((booking) => (
                <div className="confirmBooking__listing-box my-4">
                  <Row>
                    <Col sm={4} className="confirmBooking__listing-box-img">
                      <img
                        src={
                          (booking.listing.images[0] &&
                            booking.listing.images[0]) ||
                          ""
                        }
                        alt=""
                      />
                    </Col>
                    <Col sm={8} className="d-flex flex-column">
                      <small className="mb-3">
                        {booking.listing.description}
                      </small>
                      <h5 className="">{booking.listing.name}</h5>
                      <small>
                        {booking.listing.guests} guests -{" "}
                        {booking.listing.bedrooms} bedrooms -{" "}
                        {booking.listing.beds} beds -{" "}
                        {booking.listing.bathrooms} bathrooms{" "}
                      </small>
                      <>
                        {moment(booking.checkout) > moment() ? (
                          <h4 className="mt-4">UPCOMING</h4>
                        ) : (
                          <>
                            {" "}
                            <h4 className="mt-4">COMPLETED</h4>
                            <span>Leave a review</span>
                          </>
                        )}
                      </>
                    </Col>
                    <span className="divider-lg mt-4" />
                  </Row>
                  <Row className="px-4">
                    <h4 className="mt-3">Price Details</h4>
                    <div className="d-flex justify-content-between mt-4 w-100">
                      <h6>
                        From {moment(booking.checkin).format("MM/DD/YYYY")} to{" "}
                        {moment(booking.checkout).format("MM/DD/YYYY")}{" "}
                      </h6>
                      <h6>{booking.guests} guests</h6>
                      <h6>${booking.listing.rate}/ night</h6>
                      <h6>${booking.totalAmount}</h6>
                    </div>
                    <div className="d-flex justify-content-between mt-4 w-100">
                      <h6>Cleaning Fee</h6>
                      <h6>$0</h6>
                    </div>
                    <div className="total d-flex justify-content-between mt-4 w-100">
                      <h5>Total</h5>
                      <h5>${booking.totalAmount}</h5>
                    </div>
                  </Row>
                </div>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Bookings;
