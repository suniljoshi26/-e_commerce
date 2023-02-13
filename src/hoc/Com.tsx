import React, { FC } from "react";
import HOc from "./HOc";
type x = {
  name: string;
};
const Com: FC<x> = ({ name }) => {
  return <div>{name}</div>;
};
export default HOc(Com);
