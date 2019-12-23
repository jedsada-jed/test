import { useEffect, useContext } from "react";
import { RestaurantContext, SystemContext } from "../../providers";
import axios from "axios";
import { GOOGLE_MAP_URL } from '../../constants/url'
import { GOOGLE_API_KEY } from '../../../configs/google'
import { GET_DATA, CLEAR_DATA, LOADING, UNLOADING } from '../../constants/action-type'

export const useRestaurantList = () => {
  const { restaurantState, restaurantDispatch } = useContext(RestaurantContext)
  const { systemDispatch } = useContext(SystemContext)

  useEffect(() => {

    const fetchData = async () => {
      const query = 'food+in+bangsue+bangkok'
      const radius = 3000
      systemDispatch({ type: LOADING })
      const resp = await axios.get(`${GOOGLE_MAP_URL}/maps/api/place/textsearch/json?query=${query}&radius=${radius}&key=${GOOGLE_API_KEY}`)
      systemDispatch({ type: UNLOADING })

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