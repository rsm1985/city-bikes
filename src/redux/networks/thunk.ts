import axios from "axios";
import { actionGetNetworks } from "redux/networks/actions";

export const thunkGetNetworks = () => async (dispatch: any) => {
  try {
    const result = await axios.get("http://api.citybik.es/v2/networks");
    if (result) {
      dispatch(actionGetNetworks(result.data.networks));
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};
