// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import './style.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Link,
//   Outlet,
// } from "react-router-dom";


// import { Home } from "./pages/Home/index";
// import { About } from "./pages/About/index";
// import './style.css'

// const App = () => {
//   return (
//     <div className="container">
//       <nav>
//         <Link to="/Home">domu</Link>
//         <span> | </span>
//         <Link to="/About">about</Link>
     
//       <span> | </span>
//         <Link to="/CentersPage">pobocky</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// };

// const ErrorPage = () => {
//   return (
//     <main>
//       <h2>404: Tady nic není</h2>
//       <p>Asi jste se spletli</p>
//     </main>
//   );
// };


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/Home",
//         element: <Home />,
//       },
//       {
//         path: "/About",
//         element: <About />,
//       },
//     ],
//   },
// ]);

// createRoot(document.querySelector("#app")).render(
//   <RouterProvider router={router} />
// );
