import React from "react";

import "./styles.scss";

interface INetworkItem {
  id: string;
  title: string;
  href: string;
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
        data.map(({ id, title, href }: INetworkItem) => (
          <div className="table__row" key={id} onClick={() => onRowClick(href)}>
            {title}
          </div>
        ))}
    </div>
  );
}
