import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Carousel } from "react-bootstrap";
import moment from "moment";
import StarIcon from "@material-ui/icons/Star";
import "../style/ListingResult.css";
import AppContext from "../context/app-context";
import { getTotNights } from "../lib/datesCalc";

function ListingResult({ listing, lastSearch }) {
  const [totRate, setTotRate] = useState("");

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const nights = lastSearch && getTotNights(lastSearch.checkin, lastSearch.checkout);
    const totRate = nights * listing?.rate;
    setTotRate(totRate);
  }, [listing,lastSearch]);

  const arrayFeatures = (features) => {
    const array = features.split(",");
    return array;
  };
  return (
    <Row className="ListingResult">
      <Col sm={6} md={4}>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          {listing.images.map((image) => (
            <Carousel.Item>
              <Image className="cover" src={image} alt="First slide" rounded />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
      <Col sm={6} md={8} className="d-flex flex-column justify-content-between">
        <div className="d-flex flex-column">
          <span>{listing.description}</span>

          <h5>
            <Link to={`/listing/${listing._id}`}>{listing.name}</Link>
          </h5>

          <span className="divider"></span>
          <span>
            {listing.guests} guests - {listing.bedrooms} bedrooms -{" "}
            {listing.beds} beds - {listing.bathrooms} bathrooms{" "}
          </span>
          <span className="d-block">
            {listing.amenities.map((amen, i) =>
              i < listing.amenities.length - 1 ? `${amen} - ` : `${amen}`
            )}
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="ListingResult__stars d-flex flex-row align-items-end">
            <StarIcon />
            4.8 (83)
          </span>
          <div className="ListingResult__rate">
            <h5>${listing?.rate} / night</h5>${totRate}/total
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ListingResult;
