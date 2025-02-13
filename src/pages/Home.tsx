import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl font-bold text-gray-900">
          Your Customizable Analytics Dashboard
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Drag, drop, and customize widgets to build your perfect data
          dashboard.
        </p>
        <div className="mt-6 flex space-x-4">
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-gray-400 text-gray-800 rounded-md hover:bg-gray-100"
          >
            About us
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Why Choose Our Dashboard?
          </h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Drag & Drop"
              description="Easily rearrange your widgets to fit your needs."
            />
            <FeatureCard
              title="Custom Charts"
              description="Choose from Bar, Line, and Pie charts to visualize data."
            />
            <FeatureCard
              title="Data Persistence"
              description="Widgets are saved and restored when you revisit."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-white shadow-t-md">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} My Dashboard. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Home;
