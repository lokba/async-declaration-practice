import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const MyInfo = () => {
  const {
    data: { data },
  } = useQuery(
    "getUser",
    () => {
      return axios(
        "https://shopping-cart-json-web-server.herokuapp.com/productList"
      );
    },
    { suspense: true }
  );

  return (
    <div>
      <div>name : {data[0].id}</div>
      <div>email: {data[0].name}</div>
    </div>
  );
};

export default MyInfo;
