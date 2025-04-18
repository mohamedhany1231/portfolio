import { useRef } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { AsideContextComponent } from "./context/aside/AsideContextComponent";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       // {
//       //   path: "/projects",
//       //   element: <Projects />,
//       // },
//     ],
//     errorElement: <p>404 not found</p>,
//   },
// ]);

function App() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  return (
    <AsideContextComponent>
      <Layout heroRef={heroRef} projectsRef={projectsRef}>
        <Hero ref={heroRef} />
        <Projects ref={projectsRef} />
      </Layout>
    </AsideContextComponent>
  );
}

export default App;
