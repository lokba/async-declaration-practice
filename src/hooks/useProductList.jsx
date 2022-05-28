import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const useProductList = () => {
  const {
    data: { data },
  } = useQuery(
    "loadProductList",
    () =>
      axios("https://shopping-cart-json-web-server.herokuapp.com/productList"),
    { suspense: true }
  );

  return data;
};

export default useProductList;
