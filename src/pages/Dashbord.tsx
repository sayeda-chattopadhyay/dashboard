import { useState } from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Widget from "../components/Widget";

const Dashboard = () => {
  const [widgets, setWidget] = useState<string[]>([]);

  // Function to handle drag-and-drop
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setWidget((items) => {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over.id as string);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // Add new widgets
  const addWidget = (type: string) => {
    const newId = `${type}-${Date.now()}-${Math.random()}`; // Ensure unique IDs
    setWidget((prevWidgets) => [...prevWidgets, newId]);
  };

  return (
    <div className="p-4">
      {/* Title and Instruction */}
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6 text-lg text-gray-700">
        Customize your dashboard by adding different types of charts below. You
        can drag and drop them to reorder.
      </p>

      {/* Add Widget Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => addWidget("BarChart")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Bar Chart
        </button>
        <button
          onClick={() => addWidget("LineChart")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Line Chart
        </button>
        <button
          onClick={() => addWidget("PieChart")}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Add Pie Chart
        </button>
      </div>

      {/* Widgets Area */}

      {/* Draggable Widgets */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={widgets} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {widgets.length === 0 ? (
              <p className=" text-gray-700">
                No widgets added. Click a button above to add one.
              </p>
            ) : (
              widgets.map((widgetId) => <Widget key={widgetId} id={widgetId} />)
            )}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Dashboard;
