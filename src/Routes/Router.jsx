import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Page/HomePage";
import Timeline from "../Page/Timeline";
import Stats from "../Page/Stats";
import FriendDetails from "../Page/FriendDetails";
import ErrorPage from "../Page/ErrorPage";
import Hero from "../Page/Hero";
import { Suspense } from "react";

 export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: 
        <div>
            <Hero /> 
            <Suspense fallback={<div className="flex justify-center my-20"><span className="loading loading-spinner loading-xl"></span></div>}> 
                <HomePage />
            </Suspense>
        </div>
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
        hydrateFallbackElement: <div className="flex justify-center my-20"><span className="loading loading-spinner loading-xl"></span></div>
      }
    ],
    errorElement: <ErrorPage />
  }
])