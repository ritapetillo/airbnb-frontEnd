import React, { useState, useContext, useEffect, useMemo } from "react";
import { Row, Col,Container } from "react-bootstrap";
import "../style/BookingForm.css";
import StarIcon from "@material-ui/icons/Star";
import AppContext from "../context/app-context";
import { getTotNights } from "../lib/datesCalc";

function ConfirmBooking({ location }) {
  const [listing, setListing] = useState();
  const { lastSearch, user, booking } = useContext(AppContext);
  console.log(location);
  useEffect(() => {
    setListing(location.state);
  }, [location]);

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <h2 className="mt-5">Confirm and pay</h2>
            <span className="divider-lg my-4"></span>
            <h4>{user && user.firstName}, you are almost done!</h4>
          </Row>

          <Row className="mt-4">
            <h4>Your Trip</h4>
          </Row>
          <h4>{listing?.name}</h4>
        </Col>

        <Col></Col>
      </Row>
    </Container>
  );
}

export default ConfirmBooking;
