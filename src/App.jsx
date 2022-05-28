import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductListPage from "./pages/ProductListPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductListPage />
    </QueryClientProvider>
  );
};

export default App;
