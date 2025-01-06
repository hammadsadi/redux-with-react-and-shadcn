import { createBrowserRouter } from "react-router";
import Layouts from "../layouts/Layouts";
import Tasks from "../pages/Tasks";
import Users from "@/pages/Users";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

export default routes