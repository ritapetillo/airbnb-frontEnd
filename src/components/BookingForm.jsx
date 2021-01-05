import React from "react";
import { Row } from "react-bootstrap";
import "../style/BookingForm.css";
import StarIcon from "@material-ui/icons/Star";

function BookingForm({ listing }) {
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
    </div>
  );
}

export default BookingForm;
