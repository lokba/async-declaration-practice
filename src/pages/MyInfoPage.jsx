import React from "react";
import AsyncBoundary from "../components/AsyncBoundary";

import Loading from "../components/Loading";
import MyInfo from "../components/MyInfo";

const MyInfoPage = () => {
  return (
    <AsyncBoundary
      rejectedFallback={<div>에러가 발생했습니123123다.</div>}
      pendingFallback={<Loading />}
    >
      <MyInfo />
    </AsyncBoundary>
  );
};

export default MyInfoPage;
