import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { children, renderFallback } = this.props;

    if (this.state.hasError) {
      return renderFallback;
    }

    return children;
  }
}

export default ErrorBoundary;
