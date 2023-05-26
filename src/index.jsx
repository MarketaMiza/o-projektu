import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Marketa } from "./pages/Marketa/index";
// import { Alex } from "./Pages/Alex/index";
import './style.css'

const App = () => {
  return (
    <div className="container">
      <nav>
        <Link to="/Home">Domů</Link>
        <span> | </span>
        <Link to="/Marketa">Markéta</Link>
     
      {/* <span> | </span>
        <Link to="/Alex">Alex</Link> */}
      </nav>
      <Outlet />
    </div>
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
        path: "/About",
        element: <Marketa />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
