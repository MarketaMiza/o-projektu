import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Marketa } from "./pages/Marketa/index";
// import { Alex } from "./Pages/Alex/index";
import "./style.css";

const App = () => {
  return (
    <>
      <main className="container">
        <header>
          <menu>
            <ul>
              <Link to="/Home">Home</Link>
              <Link to="/Marketa">Markéta</Link>
            </ul>
          </menu>
        </header>
        <Outlet />
      </main>
    </>
  );
};

const ErrorPage = () => {
  return (
    <main>
      <h2>404: Tady nic není</h2>
      <p>Asi jste se spletli</p>
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Marketa",
        element: <Marketa />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
