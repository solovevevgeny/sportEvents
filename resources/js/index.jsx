import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App.jsx";

import "../css/uikit.min.css";
import "../css/app.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Main from "./pages/Main";
import Event from "./pages/Event";


import Header from "./pages/layouts/Header";

const router = createBrowserRouter([
{
    path: "/",
    element: <Main />
},
{
    path: "/event/:eventId",
    element: <Event />
}
]);

const root = createRoot(document.getElementById('app'));
root.render(
    <RouterProvider router={router} />
)