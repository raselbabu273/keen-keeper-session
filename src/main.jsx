import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Router";
import { ToastContainer } from "react-toastify";
import { TimelineContext } from "./Context/ContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineContext>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </TimelineContext>
  </StrictMode>
);
