import React from "react";
import AsyncBoundary from "../components/AsyncBoundary";

import Loading from "../components/Loading";
import ProductList from "../components/ProductList";
import Error from "../components/Error";

const ProductListPage = () => {
  return (
    <AsyncBoundary rejectedFallback={<Error />} pendingFallback={<Loading />}>
      <ProductList />
    </AsyncBoundary>
  );
};

export default ProductListPage;
