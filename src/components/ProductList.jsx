import React from "react";
import useProductList from "../hooks/useProductList";

const ProductList = () => {
  const data = useProductList();

  return (
    <div>
      {data.map(({ id, name }) => (
        <div key={id}>
          <span>상품id : {id}</span>
          <span>상품명 : {name}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
