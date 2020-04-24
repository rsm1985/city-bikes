import React from "react";
import { useSelector } from "react-redux";

import "./styles.scss";

interface INetworkItem {
  id: string;
  title: string;
  href: string;
}
interface OwnProps {
  data: INetworkItem[];
  onRowClick: (href: string, id: string) => void;
}
export default function Table(props: OwnProps) {
  const networks = useSelector((state: any) => state.citybikesNetworks);
  const { activeNetworkId } = networks;
  console.log("activeNetworkId", activeNetworkId);
  const { data, onRowClick } = props;
  return data && data.length ? (
    <div className="table">
      {data.map(({ id, title, href }: INetworkItem) => (
        <div
          key={id}
          onClick={() => onRowClick(href, id)}
          className={`table__row ${activeNetworkId === id ? "active" : ""}`}
        >
          {title}
        </div>
      ))}
    </div>
  ) : (
    <div>No stations</div>
  );
}
