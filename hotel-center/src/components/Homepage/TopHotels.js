import React from "react";
import SingleTopHotelCard from "./SingleTopHotelCard";

export default function TopHotels(props) {
  return (
    <div className="container top-hotels mt-5">
      <h3 className="mb-4 fw-bold">Top Hotels</h3>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {props.hotels
          ? props.hotels.map((hotel) => (
              <SingleTopHotelCard
                image={hotel.image}
                name={hotel.name}
                city={hotel.city}
                country={hotel.country}
                score={hotel.score}
                isFavorite={hotel.isFavorite}
              />
            ))
          : null}
      </div>
    </div>
  );
}
