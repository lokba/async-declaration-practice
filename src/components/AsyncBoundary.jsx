import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

const AsyncBoundary = ({ rejectedFallback, pendingFallback, children }) => {
  return (
    <ErrorBoundary renderFallback={rejectedFallback}>
      <Suspense fallback={pendingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
