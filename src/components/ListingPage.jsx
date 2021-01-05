import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getListingById } from "../lib/fetches";
import "../style/ListingPage.css";
import StarIcon from "@material-ui/icons/Star";
import BookingForm from "./BookingForm";

function ListingPage({ match }) {
  const [listing, setListing] = useState({});
  useEffect(() => {
    if (match.params.id) {
      const { id } = match.params;
      getCurrentListing(id);
    }
  }, [match.params]);

  const getCurrentListing = async (id) => {
    try {
      const listing = await getListingById(id);
      setListing(listing);
      console.log(listing);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container className="ListingPage">
      {listing && (
        <>
          <h4>{listing?.name}</h4>
          <span className="d-block mb-4">
            <StarIcon /> 4.80 (84) ·{" "}
            {listing !== undefined &&
              listing.address !== undefined &&
              listing?.address[0]?.formattedAddress
                .split(",")
                .slice(2)
                .join(" · ")}
          </span>
          <div className="ListingPage__grid">
            {listing &&
              listing?.images?.map((image) => (
                <div>
                  <img src={image} alt="" />
                </div>
              ))}
          </div>
          <div className="row">
            <Col md={8}>
              <h4 className="mt-4">{listing.description}</h4>
              <span className="d-block">
                {listing.guests} guests - {listing.bedrooms} bedrooms -{" "}
                {listing.beds} beds - {listing.bathrooms} bathrooms{" "}
              </span>
              <span className="divider mt-3"></span>
            </Col>
            <Col md={4}>
              <BookingForm listing={listing} />
            </Col>
          </div>
        </>
      )}
    </Container>
  );
}

export default ListingPage;
