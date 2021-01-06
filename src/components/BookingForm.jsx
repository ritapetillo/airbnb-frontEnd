import React, { useState, useContext, useEffect, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import "../style/BookingForm.css";
import StarIcon from "@material-ui/icons/Star";
import AppContext from "../context/app-context";
import { getTotNights } from "../lib/datesCalc";

function BookingForm({ listing, history }) {
  const [bookDetails, setBookDetails] = useState({
    checkin: "",
    checkout: "",
    guests: "",
  });
  const [nights, setNights] = useState(0);
  const [tot, setTot] = useState("");

  const { lastSearch, user, registerBooking } = useContext(AppContext);

  useEffect(() => {
    setBookDetails({
      ...lastSearch,
    });
  }, []);

  useEffect(() => {
    setNights(getTotNights(bookDetails?.checkin, bookDetails?.checkout));
  }, [bookDetails]);

  const handleSubmitBooking = async () => {
    const body = {
      ...bookDetails,
      listing: listing._id,
      totalAmount:
        listing.rate * nights + (listing.cleaningFee ? listing.cleaningFee : 0),
    };
    await registerBooking(body);
    history.push({ pathname: "/booking", state: listing });
  };

  // const total = useMemo(() => {
  //   setTot(Number(nights * listing.rate));
  // }, [nights]);

  return (
    <div className="BookingForm">
      <Row className="BookingForm__top justify-content-between">
        <h5>
          $ {listing.rate} / <small>night</small>{" "}
        </h5>{" "}
        <span>
          <StarIcon /> 4.8 (84)
        </span>
      </Row>
      <Row className="BookingForm__form">
        <Col sm={12} md={6}>
          <small>CHECK-IN</small>
          <input
            value={bookDetails && bookDetails.checkin}
            type="date"
            onChange={(e) =>
              setBookDetails({ ...bookDetails, checkin: e.target.value })
            }
          />
        </Col>
        <Col sm={12} md={6}>
          <small>CHECK-OUT</small>
          <input
            value={bookDetails && bookDetails.checkout}
            type="date"
            onChange={(e) =>
              setBookDetails({ ...bookDetails, checkout: e.target.value })
            }
          />
        </Col>
        <Col sm={12} md={12}>
          {" "}
          <small>GUESTS</small>
          <input
            value={bookDetails && bookDetails.guests}
            type="number"
            onChange={(e) =>
              setBookDetails({ ...bookDetails, guests: e.target.value })
            }
          />
        </Col>
      </Row>
      <Row>
        <span
          className="BookingForm__reserve-cta"
          onClick={handleSubmitBooking}
        >
          Reserve
        </span>
      </Row>
      <Row className="justify-content-between mt-4">
        <h6>
          ${listing.rate}X{nights} nights
        </h6>
        <h6>${listing.rate * nights}</h6>
      </Row>

      <Row className="justify-content-between mt-2">
        <h6>Cleaning Fees</h6>

        <h6>${listing.cleaningFee ? listing.cleaningFee : "0"}</h6>
      </Row>
      <span className="divider-lg"></span>

      <Row className="justify-content-between mt-2">
        <h6>Total</h6>

        <h6>
          ${" "}
          {listing.rate * nights +
            (listing.cleaningFee ? listing.cleaningFee : 0)}
        </h6>
      </Row>
    </div>
  );
}

export default BookingForm;
