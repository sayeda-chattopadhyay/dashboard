import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import CryptoBarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";

interface WidgetProps {
  id: string;
}

const Widget = ({ id }: WidgetProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // Determine chart type from ID

  const chartType = id.split("-")[0];

  const renderChart = () => {
    switch (chartType) {
      case "BarChart":
        return <CryptoBarChart />;
      case "LineChart":
        return <LineChart />;
      case "PieChart":
        return <PieChart />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{chartType}</h3>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="p-4 bg-white shadow rounded relative"
      >
        {renderChart()}
      </div>
    </div>
  );
};

export default Widget;
