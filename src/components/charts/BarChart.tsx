import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import useCryptoData from "../../hooks/useCryptoData";

const CryptoBarChart = () => {
  const { data, isLoading, error } = useCryptoData();

  if (isLoading) return <p>Loading....</p>;
  if (error instanceof Error) return <p> Error : {error.message}</p>;

  return (
    <div className="bg-white p-4 rounder shadow-md">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">
          Top 5 Cryptocurrencies (USD)
        </h2>
        <p>Shows the current prices of the top 5 cryptocurrencies.</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data.slice(0, 5)}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="current_price" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CryptoBarChart;
