import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Router";
import { ToastContainer } from "react-toastify";
import TimelineContextProvider from "./Context/TimelineProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineContextProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </TimelineContextProvider>
  </StrictMode>
);
