import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Page/HomePage";
import Timeline from "../Page/Timeline";
import Stats from "../Page/Stats";

 export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        Component: HomePage
      },
      {
        path: '/timeline',
        Component: Timeline
      },
      {
        path: '/stats',
        Component: Stats
      }
    ]
  }
])