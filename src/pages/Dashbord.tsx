import { useState, useEffect } from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Widget from "../components/Widget";

const Dashboard = () => {
  const [widgets, setWidgets] = useState<string[]>([]);

  // Handle Drag and Drop
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setWidgets((items) => {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over.id as string);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // Add a new widget
  const addWidget = (type: string) => {
    const newId = `${type}-${Date.now()}-${Math.random()}`;
    setWidgets((prevWidgets) => [...prevWidgets, newId]);
  };

  // Clear all widgets
  const clearAllWidgets = () => {
    setWidgets([]);
    localStorage.removeItem("dashboard-widgets");
  };

  // Load widgets from localStorage
  useEffect(() => {
    try {
      const storedWidgets = localStorage.getItem("dashboard-widgets");
      if (storedWidgets) {
        const parsedWidgets = JSON.parse(storedWidgets);
        if (Array.isArray(parsedWidgets)) {
          setWidgets(parsedWidgets);
        } else {
          console.error("Invalid widgets data in localStorage");
          localStorage.removeItem("dashboard-widgets");
        }
      }
    } catch (error) {
      console.error("Failed to load widgets:", error);
      localStorage.removeItem("dashboard-widgets");
    }
  }, []);

  // Save widgets to localStorage
  useEffect(() => {
    if (widgets.length > 0) {
      localStorage.setItem("dashboard-widgets", JSON.stringify(widgets));
    }
  }, [widgets]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          📊 My Dashboard
        </h1>
        <p>
          This dashboard provides a real-time overview of the top
          cryptocurrencies, showing price trends, market distribution, and
          rankings.
        </p>
        <p className="mt-2 text-lg text-gray-600">
          Drag and drop your widgets to organize your custom dashboard.
        </p>
      </header>

      {/* Buttons Section */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => addWidget("BarChart")}
          className="px-5 py-3 rounded-lg bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 transition"
        >
          ➕ Add Bar Chart
        </button>
        <button
          onClick={() => addWidget("LineChart")}
          className="px-5 py-3 rounded-lg bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition"
        >
          📈 Add Line Chart
        </button>
        <button
          onClick={() => addWidget("PieChart")}
          className="px-5 py-3 rounded-lg bg-purple-500 text-white font-medium shadow-md hover:bg-purple-600 transition"
        >
          🥧 Add Pie Chart
        </button>
        <button
          onClick={clearAllWidgets}
          className="px-5 py-3 rounded-lg bg-red-500 text-white font-medium shadow-md hover:bg-red-600 transition"
        >
          🗑 Clear All
        </button>
      </div>

      {/* Widgets Area */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={widgets} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {widgets.length === 0 ? (
              <p className="text-md text-gray-700 bg-white shadow p-4 rounded-lg">
                ⚠️ No widgets added. Click a button above to add one.
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
