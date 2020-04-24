import axios from "axios";
import {
  actionGetStations,
  actionToggleStationLoading,
} from "redux/stations/actions";

export const thunkGetStations = (item: any) => async (dispatch: any) => {
  dispatch(actionToggleStationLoading(true));
  try {
    const result = await axios.get(`http://api.citybik.es${item.href}`);
    if (result) {
      const data = result.data.network.stations.map(
        ({ id, href, name }: any) => ({
          id,
          href: "",
          title: name,
          like: true,
        })
      );
      dispatch(actionGetStations(data));
    }
  } catch (err) {
    console.log("Error: ", err);
  } finally {
    dispatch(actionToggleStationLoading(false));
  }
};
