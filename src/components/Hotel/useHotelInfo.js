import { useState } from "react";
import { cookies, makeURL } from "src/Utils/common";
import references from "../../assets/References.json";
import axios from "axios";

export default function useHotelInfo(initialData) {
  const [hotel] = useState(initialData);
  const [isFavorite, setIsFavorite] = useState(false);

  async function toggleIsFavorite() {
    return axios
      .post(
        makeURL(references.url_addfavoritehotel),
        { hotel_id: hotel.id },
        {
          headers: {
            Authorization: cookies.get("Authorization"),
          },
        }
      )
      .then((response) => {
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  return {
    hotel,
    isHotelFavorite: isFavorite,
    toggleIsHotelFavorite: toggleIsFavorite,
  };
}
