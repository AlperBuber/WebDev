import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import MainLayout from "./layouts/MainLayout";
import Movies from "./pages/Movies";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "/movies", element: <Movies /> },
      { path: "/movies/:category/:page", element: <Movies /> },
      { path: "/:movie/:id", element: <MovieDetails /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
