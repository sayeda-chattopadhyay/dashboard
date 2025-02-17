import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import useCryptoData from "../../hooks/useCryptoData";

const LineChart = () => {
  const { data, isLoading, error } = useCryptoData();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data.</p>;

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Posts Trend</h2>
        <p>Displays the price trends of cryptocurrencies over time.</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <ReLineChart data={data.slice(0, 5)}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="current_price"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
