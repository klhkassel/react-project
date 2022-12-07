import React from "react";
import { useSelector } from "react-redux";

const CountAllItems = () => {
  const items = useSelector((state) =>
    state.items.filter((item) => item.completed === false)
  );

  return <h4 className="mt-3">Total items: {items.length}</h4>;
};

export default CountAllItems;
