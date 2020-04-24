import React from "react";
import { thunkGetStations } from "redux/stations/thunk";

interface INetworkItem {
  company: string[];
  href: string;
  id: string;
  name: string;
  location: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  };
}
interface OwnProps {
  data: INetworkItem[];
}
export default function Table(props: OwnProps) {
  const { data } = props;
  const getStations = (href: string) => {
    thunkGetStations(href);
  };
  return (
    <div className="table">
      {data &&
        data.map(({ id, name, company, href, location }: INetworkItem) => (
          <div
            className="table__row"
            key={id}
            onClick={() => getStations(href)}
          >
            {`${company}, ${location.city}, ${location.country}`}
          </div>
        ))}
    </div>
  );
}
