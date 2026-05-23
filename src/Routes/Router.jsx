import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Page/HomePage";
import Timeline from "../Page/Timeline";
import Stats from "../Page/Stats";
import FriendDetails from "../Page/FriendDetails";

 export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        Component: HomePage,
        hydrateFallbackElement: <span className="loading loading-spinner loading-xl"></span>
      },
      {
        path: '/timeline',
        Component: Timeline
      },
      {
        path: '/stats',
        Component: Stats
      },
      {
        path: '/friendDetails/:id',
        Component: FriendDetails,
        loader: () => fetch('/friends.json').then(res => res.json()),
        hydrateFallbackElement: <div className="flex justify-center"><span className="loading loading-spinner loading-xl"></span></div>
      }
    ]
  }
])