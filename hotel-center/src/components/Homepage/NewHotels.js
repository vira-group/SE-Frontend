import React from "react";
import SingleNewHotelCard from "./SingleNewHotelCard";

export default function NewHotels(props) {
  return (
    <div className="container new-hotels mt-5">
      <h3 className="mb-4 fw-bold">New Hotels</h3>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {props.hotels
          ? props.hotels.map((hotel) => (
              <SingleNewHotelCard
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
