import React from "react";

interface INetworkItem {
  company: string[];
  href: string;
  id: string;
  name: string;
}
interface OwnProps {
  data: INetworkItem[];
}
export default function Table(props: OwnProps) {
  const { data } = props;

  return <div>{JSON.stringify(data)}</div>;
}
