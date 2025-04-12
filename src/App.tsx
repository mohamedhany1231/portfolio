import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Hero /> },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
    errorElement: <p>404 not found</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
