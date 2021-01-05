import React, { useState, useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "../style/BookingForm.css";
import StarIcon from "@material-ui/icons/Star";
import AppContext from "../context/app-context";
import { getTotNights } from "../lib/datesCalc";

function BookingForm({ listing }) {
  const [bookDetails, setBookDetails] = useState({});
  const [nights, setNights] = useState("");
  const [tot, setTot] = useState("");

  const { lastSearch, user, registerBooking } = useContext(AppContext);
  useEffect(() => {
    setBookDetails({
      ...lastSearch,
    });
    setNights(getTotNights(lastSearch.checkin, lastSearch.checkout));
    const cleaningFees = listing.cleaningFee ? listing.cleaningFee : 0;
    setTot(Number(nights * listing.rate + cleaningFees));
    console.log(tot);
  }, []);

  const handleSubmitBooking = () => {
    const body = {
      ...bookDetails,
      listing: listing._id,
      totalAmount: tot,
    };
    registerBooking(body);
  };

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
            value={lastSearch?.checkin}
            type="date"
            onChange={(e) =>
              setBookDetails({ ...bookDetails, checkin: e.target.value })
            }
          />
        </Col>
        <Col sm={12} md={6}>
          <small>CHECK-OUT</small>
          <input
            value={lastSearch?.checkout}
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
            value={lastSearch?.guests}
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

        <h6>${tot}</h6>
      </Row>
    </div>
  );
}

export default BookingForm;
