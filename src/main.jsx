import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				// index: true, or path: "/" are same
				path: '/',
				element: <Home />
			},
			{
				path: '/blogs',
				element: <Blogs/>
			},
			{
				path: '/bookmarks',
				element: <Bookmarks />
			},
		]
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
