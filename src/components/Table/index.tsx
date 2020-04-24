import React from "react";

import "./styles.scss";

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
  onRowClick: (href: string) => void;
}
export default function Table(props: OwnProps) {
  const { data, onRowClick } = props;

  return (
    <div className="table">
      {data &&
        data.map(({ id, name, company, href, location }: INetworkItem) => (
          <div className="table__row" key={id} onClick={() => onRowClick(href)}>
            {`${company}, ${location.city}, ${location.country}`}
          </div>
        ))}
    </div>
  );
}
