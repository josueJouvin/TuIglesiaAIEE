import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ChurchExplorerMap from "./pages/ChurchExplorerMap";
import ChurchProfile from "./pages/ChurchProfile";
import Profile from "./pages/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                index: true,
                path: "/",
                element:<Home/>
            },
            {
                path:"/iglesias",
                element:<ChurchExplorerMap/>
            },
            {
                path:"/iglesias/:id",
                element:<ChurchProfile/>
            },{
                path: "perfil",
                element:<Profile/>
            }
        ]
    }
])
