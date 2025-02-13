import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ErrorFallback } from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashbord"));
const About = lazy(() => import("./pages/About"));
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <div className="px-2">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/dashboard"
            element={
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => window.location.reload()}
              >
                <Dashboard />
              </ErrorBoundary>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
