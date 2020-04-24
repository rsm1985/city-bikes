import axios from "axios";
import { actionGetStations } from "redux/stations/actions";

export const thunkGetStations = (href: string) => async (dispatch: any) => {
  try {
    const result = await axios.get(`http://api.citybik.es${href}`);
    if (result) {
      console.log("result.data.network", result.data.network);
      const data = result.data.network.stations.map(
        ({ id, href, name }: any) => ({
          id,
          href: "",
          title: name,
        })
      );
      dispatch(actionGetStations(data));
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};
