import axios from "axios";
import {
  actionGetNetworks,
  actionSetActiveNetwork,
} from "redux/networks/actions";
import { thunkGetStations } from "redux/stations/thunk";

export const thunkGetNetworks = () => async (dispatch: any, getState: any) => {
  try {
    const result = await axios.get("http://api.citybik.es/v2/networks");
    if (result) {
      const data = result.data.networks
        .splice(1)
        .map(({ id, name, company, href, location }: any) => ({
          id,
          href,
          title: `${company}, ${location.city}, ${location.country}`,
        }));
      dispatch(actionGetNetworks(data));

      const state = getState();
      if (!state.citybikesStations.data) {
        dispatch(thunkGetStations(data[0].href));
        dispatch(actionSetActiveNetwork(data[0].id));
      }
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};
