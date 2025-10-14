import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { OfficerLogin } from "./components/officer/OfficerLogin.jsx";
import { OfficerSignUp } from "./components/officer/OfficerSignUp.jsx";
import { OfficerDashboard } from "./components/officer/OfficerDashboard.jsx";
import { HeadLogin } from "./components/department_head/HeadLogin.jsx";
import { HeadSignUp } from "./components/department_head/HeadSignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup/officer",
    element: <OfficerSignUp />,
  },
  {
    path: "/login/officer",
    element: <OfficerLogin />,
    children: [
      {
        path: "dashboard",
        element: <OfficerDashboard />,
      },
    ],
  },
  {
    path: "/signup/department_head",
    element: <HeadSignUp />,
  },
  {
    path: "/login/department_head",
    element: <HeadLogin />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
