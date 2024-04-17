import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@cloudscape-design/global-styles/index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartScreen from "./components/StartScreen";
import FinishScreen from "./components/FinishScreen";
import Main from "./components/Main.tsx";
import { Provider } from "react-redux";
import store from "../store.ts";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { element: <StartScreen />, path: "login", index: true },
      { element: <Main />, path: "quiz" },
      { element: <FinishScreen />, path: "finish" },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
