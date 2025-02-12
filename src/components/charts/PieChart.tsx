import {
  PieChart as RePieChat,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import useCryptoData from "../../hooks/useCryptoData";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const PieChart = () => {
  const { data, isLoading, error } = useCryptoData();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error : error</p>;

  const pieData = data?.slice(0, 5); // Check if data exists
  console.log(pieData); // Debugging data structure

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Posts Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RePieChat>
          <Pie
            data={pieData}
            dataKey="current_price"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
          >
            {pieData?.map(
              (
                entry: { name: string; current_price: number },
                index: number
              ) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  name={entry.name}
                />
              )
            )}
          </Pie>
          <Tooltip />
        </RePieChat>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
