import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Error from "../Error/Error";
import Page from "../pages/Screen/Page";



export const mainRoute = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
            
                    path: "/",
                    element: <Page/>
                },
      
                {
                    path: "*",
                    element: <Error/>
                
            }
        ]
    },
   

])