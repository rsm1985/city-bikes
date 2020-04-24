import axios from "axios";

export const thunkGetStations = (href: string) => async (dispatch: any) => {
  try {
    const result = await axios.get(`http://api.citybik.es${href}`);
    if (result) {
      console.log("thunkGetStations", result.data.network);
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};
