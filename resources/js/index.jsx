import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App.jsx";

import "../css/uikit.min.css";
import "../css/app.css";

import Header from "./pages/layouts/Header";

const root = createRoot(document.getElementById('app'));
root.render(
    <>
        <Header />
        <App />
    </>
)