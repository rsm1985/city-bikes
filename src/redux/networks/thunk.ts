import axios from "axios";
import { actionGetNetworks } from "redux/networks/actions";

export const thunkGetNetworks = () => async (dispatch: any) => {
  try {
    const result = await axios.get("http://api.citybik.es/v2/networks");
    if (result) {
      const data = result.data.networks.map(
        ({ id, name, company, href, location }: any) => ({
          id,
          href,
          title: `${company}, ${location.city}, ${location.country}`,
        })
      );
      dispatch(actionGetNetworks(data));
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};
