import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ChurchExplorerMap from "./pages/ChurchExplorerMap";
import ChurchProfile from "./pages/ChurchProfile";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./layout/Layout";
import ProfileUpdate from "./pages/ProfileUpdate";
import NewChurch from "./pages/NewChurch";

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
                path:"/login", 
                element:<Login/>
            },
            {
                path:"/register", 
                element:<Register/>
            },
            {
                path:"/iglesias",
                element:<ChurchExplorerMap/>
            },
            {
                path:"/iglesias/:id",
                element:<ChurchProfile/>
            },
            {
                path: "/",
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: "/perfil",
                        element: <Profile/>
                    },
                    {
                        path: "/perfil/actualizar",
                        element: <ProfileUpdate/>
                    },
                    {
                        path: "/nueva-iglesia",
                        element: <NewChurch/>
                    }
                ]
            }
        ]
    },
])
