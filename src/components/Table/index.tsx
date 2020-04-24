import React from "react";

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
  const { data, onRowClick } = props;
  return data && data.length ? (
    <div className="table">
      {data.map(({ id, title, href }: INetworkItem) => (
        <div
          className="table__row"
          key={id}
          onClick={() => onRowClick(href, id)}
        >
          {title}
        </div>
      ))}
    </div>
  ) : (
    <div>No stations</div>
  );
}
