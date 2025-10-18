import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { HeadDashboard } from "./components/department_head/head_dashboard/HeadDashboard.jsx";
import { HeadOfficers } from "./components/department_head/head_dashboard/HeadOfficers.jsx";
import { HeadStudentRecords } from "./components/department_head/head_dashboard/HeadStudentRecords.jsx";
import { HeadBatchManagement } from "./components/department_head/head_dashboard/HeadBatchManagement.jsx";
import { HeadLogout } from "./components/department_head/head_dashboard/HeadLogout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/head",
    element: <HeadDashboard />,
    children: [
      {
        path: "student-records",
        element: <HeadStudentRecords />,
      },
      {
        path: "batch-management",
        element: <HeadBatchManagement />,
      },
      {
        path: "enrollment-officers",
        element: <HeadOfficers />,
      },
      {
        path: "reports",
        element: <HeadOfficers />,
      },
    ],
  },
  {
    path: "/",
    element: <HeadLogout />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
