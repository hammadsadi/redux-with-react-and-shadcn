import { createBrowserRouter } from "react-router";
import Layouts from "../layouts/Layouts";
import Tasks from "../pages/Tasks";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Layouts/>,
        children:[
            {
                index:true,
                element: <Tasks/>
            }
        ]
    }
])

export default routes