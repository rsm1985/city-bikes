import axios from "axios";
import { actionGetStations } from "redux/stations/actions";

export const thunkGetStations = (href: string) => async (dispatch: any) => {
  try {
    const result = await axios.get(`http://api.citybik.es${href}`);
    if (result) {
      dispatch(actionGetStations(result.data.network.stations));
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};
