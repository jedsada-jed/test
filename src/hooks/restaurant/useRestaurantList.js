import { useEffect, useContext } from "react";
import { RestaurantContext } from "../../providers";
import { GET_DATA, CLEAR_DATA } from '../../constants/action-type'
import { GOOGLE_MAP_URL } from '../../constants/url'
import axios from "axios";

export const useRestaurantList = () => {
  const { restaurantState, restaurantDispatch } = useContext(RestaurantContext)

  useEffect(() => {

    const fetchData = async () => {
      const query = 'food+in+bangsue+bangkok'
      const radius = 3000
      const apiKey = 'AIzaSyAuZlLAtyh6hJc-bHBZQcOkg9oG7NhAgMI&fields=='
      const resp = await axios.get(`${GOOGLE_MAP_URL}/maps/api/place/textsearch/json?query=${query}&radius=${radius}&key=${apiKey}`)
      
      restaurantDispatch({
        type: GET_DATA,
        restaurants: resp.data.results
      });

    };

    fetchData();

  }, []);

  const clearData = () => {
    restaurantDispatch({ type: CLEAR_DATA })
  }

  const { restaurants } = restaurantState
  return { restaurants, clearData };
}