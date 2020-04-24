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
  onRowClick: (data: INetworkItem) => void;
}
export default function Table(props: OwnProps) {
  const networks = useSelector((state: any) => state.citybikesNetworks);
  const { activeNetwork } = networks;
  const { data, onRowClick } = props;
  return data && activeNetwork ? (
    <div className="table">
      {data.map((item: INetworkItem) => (
        <div
          key={item.id}
          onClick={() => onRowClick(item)}
          className={`table__row ${
            activeNetwork.id === item.id ? "active" : ""
          }`}
        >
          {item.title}
        </div>
      ))}
    </div>
  ) : (
    <div>No stations</div>
  );
}
