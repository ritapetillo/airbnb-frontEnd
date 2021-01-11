import React, { useState, useContext, useEffect, useMemo } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../style/BookingForm.css";
import StarIcon from "@material-ui/icons/Star";
import AppContext from "../context/app-context";
import { getTotNights } from "../lib/datesCalc";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import moment from "moment";
import "../style/ConfirmBooking.css";

function ConfirmBooking({ location, history }) {
  const [listing, setListing] = useState();
  const { lastSearch, user, booking, registerBooking } = useContext(AppContext);
  console.log(location);
  useEffect(() => {
    console.log(booking);
  }, []);
  useEffect(() => {
    setListing(location.state);
  }, [location]);

  const handleSubmitBooking = async () => {
    try {
      const bookingMade = await registerBooking(booking);
      if (bookingMade) {
        alert("Booking Successfully Made");
        setTimeout(() => {
          history.push("/");
        }, 1000);
      }
    } catch (err) {
      console.lof("there is an error with booking");
    }
  };

  return (
    <Container className="confirmBooking">
      <Row>
        <h2 className="mt-5 mb-5">
          <ArrowBackIosIcon /> Confirm and pay
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
            <h4>{user && user.firstName}, you are almost done!</h4>
          </Row>
          <Row className="mt-4 flex-column">
            <span className="divider-lg mt-0 mb-4"></span> <h4>Your Trip</h4>
          </Row>
          <Row className="flex-column  my-4">
            <h5>Dates:</h5>
            <span>
              {moment(booking?.checkin).format("MM/DD/YYYY")} -{" "}
              {moment(booking?.checkout).format("MM/DD/YYYY")}
            </span>
            <span>Check-in: After 3:00 PM</span>
          </Row>
          <Row className="flex-column my-4">
            <h5>Guests</h5>
            <span>{booking.guests}</span>
            <span className="divider-lg mt-0 my-4"></span>{" "}
          </Row>
          <Row>
            <h4>Cancellation policy</h4>
            <p>
              Cancel before 3:00 PM on Jan 13 and get a 50% refund, minus the
              first night and service fee. Learn more
            </p>
            <p>
              Make sure this host’s cancellation policy works for you. For
              reservations made after March 14, COVID-19 will not qualify as an
              extenuating circumstance. Learn more
            </p>
            <span className="divider-lg mt-0 my-4"></span>{" "}
            <span
              className="ConfirmBooking__reserve-cta"
              onClick={handleSubmitBooking}
            >
              Confirm Booking
            </span>
          </Row>
        </Col>
        <Col
          sm={12}
          md={{
            size: 5,
            offset: 2,
          }}
          className="pl-4 "
        >
          {listing && (
            <div className="confirmBooking__listing-box">
              <Row>
                <Col sm={4} className="confirmBooking__listing-box-img">
                  <img src={listing.images[0] || ""} alt="" />
                </Col>
                <Col sm={8} className="d-flex flex-column">
                  <small className="mb-3">{listing.description}</small>
                  <span className="confirmBooking__listing-box__name">
                    {listing.name}
                  </span>
                  <small>
                    {listing.guests} guests - {listing.bedrooms} bedrooms -{" "}
                    {listing.beds} beds - {listing.bathrooms} bathrooms{" "}
                  </small>
                </Col>
                <span className="divider-lg mt-4" />
              </Row>
              <Row className="px-4">
                <h4 className="mt-3">Price Details</h4>
                <div className="d-flex justify-content-between mt-4 w-100">
                  <h6>
                    ${listing.rate} X {booking.nights} nights
                  </h6>
                  <h6>${booking.totalAmount}</h6>
                </div>
                <div className="d-flex justify-content-between mt-4 w-100">
                  <h6>Cleaning Fee</h6>
                  <h6>$0</h6>
                </div>
                <div className="total d-flex justify-content-between mt-4 w-100">
                  <h6>Total</h6>
                  <h6>${booking.totalAmount}</h6>
                </div>
              </Row>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ConfirmBooking;
