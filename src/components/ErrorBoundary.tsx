import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackUI?: ReactNode; // Optional fallback UI in case of error
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null, // Initialize errorInfo as null
    };
  }

  // Called when an error is caught
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null }; // // Set `errorInfo` to null initially
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo, // Set both error and errorInfo
    });

    // Optionally log error information to an external service
    console.error("Error Boundary Caught an Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        this.props.fallbackUI || (
          <div>
            <h1>Something went wrong.</h1>
            <p>{this.state.error?.message}</p>
            <button onClick={() => window.location.reload()}>Reload</button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// getDerivedStateFromError: This is called when an error is thrown in a child component. It updates the state to indicate the error has occurred.
// componentDidCatch: This method is triggered after the error is caught, and it allows you to log the error to an external service or perform other actions.
// Fallback UI: The error boundary renders a fallback UI when an error is encountered. You can customize the UI or provide a fallback UI as a prop.
