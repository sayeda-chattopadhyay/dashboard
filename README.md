# Dashboard Project

This project is a draggable and resizable dashboard built using React, TypeScript, and DnD Kit. Users can add different types of charts (Bar, Line, Pie), rearrange them, and persist their layout using local storage.

## Features

- Drag and Drop: Rearrange widgets using DnD Kit.
- Persistent State: Widgets are saved in localStorage and restored on page reload.
- Dynamic Widget Addition: Users can add different chart types dynamically.
- Responsive Layout: Optimized for various screen sizes.

## Installation

## Clone the repository:

git clone

- https://github.com/your-repo/dashboard.git

cd dashboard

## Install dependencies:

npm install

## Run the development server:

npm run dev

## Usage

### Adding Widgets

Click the Add Bar Chart, Add Line Chart, or Add Pie Chart button to add widgets to the dashboard.

### Dragging Widgets

Drag widgets to rearrange their order.

### Data Persistence

The widget layout is saved in localStorage and restored on page reload.

## Troubleshooting

- Widgets Disappear on Refresh
- Make sure localStorage is not corrupted. Run the following in the browser console:
  localStorage.removeItem("dashboard-widgets");

- Then refresh the page and try adding widgets again.

## Drag and Drop Not Working

Ensure DnD Kit is properly installed:
npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities
