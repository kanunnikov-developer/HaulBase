import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "./page/Auth/Register/Register";
import { Auth } from "./page/Auth/Auth";
import { Main } from "./page/Home/Home";
import { Tariffs } from "./page/Tariffs/Tariffs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/tariffs",
        element: <Tariffs />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
