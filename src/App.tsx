import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartScreen from "./components/StartScreen";
import FinishScreen from "./components/FinishScreen";
import Main, { loader as questionsLoader } from "./components/Main.tsx";
import AppLayout from "./components/AppLayout.tsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { element: <StartScreen />, path: "/" },
      { element: <Main />, path: "quiz", loader: questionsLoader },
      { element: <FinishScreen />, path: "finish" },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
