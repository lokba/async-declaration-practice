import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import MyInfoPage from "./pages/MyInfoPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MyInfoPage />
    </QueryClientProvider>
  );
};

export default App;
