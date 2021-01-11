import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/app-context";
import ListIcon from "@material-ui/icons/List";
import { Container, Row, Column } from "react-bootstrap";
import "../style/ListingsMap.css";

function ListingsMap({ history }) {
  const { listings, lastSearch } = useContext(AppContext);
  console.log([listings[0].address[0]]);

  return (
    <div>
      {listings ? (
        <MapContainer
          center={[
            listings[0].address[0].latitude,
            listings[0].address[0].longitude,
          ]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {listings.map((listing) => (
            <Marker
              position={[
                listing.address[0].latitude,
                listing.address[0].longitude,
              ]}
            >
              <Popup>
                <Container>
                  <Link to={`/listing/${listing._id}`}>
                    {" "}
                    <h6>{listing.name}</h6>
                  </Link>{" "}
                  <br />{" "}
                  <Row className="d-flex flex-wrap">
                    <img src={listing.images[0]} style={{ height: "50px" }} />
                    <div className="ml-3 mt-0 d-flex flex-column">
                      <span> Bedrooms: {listing.bedrooms}</span>
                      <span>Guests: {listing.guests}</span>
                      <span>Rate: ${listing.rate}</span>
                    </div>
                  </Row>
                </Container>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : (
        ""
      )}
      <span
        className="ListingsMap__list-btn"
        onClick={() => history.push("/search")}
      >
        <ListIcon /> List
      </span>
    </div>
  );
}

export default ListingsMap;
