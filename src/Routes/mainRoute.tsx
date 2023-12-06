import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Error from "../Error/Error";
import Page from "../pages/Screen/Page";
import HomeScreen from "../pages/Screen/HomeScreen";
import AboutMe from "../pages/Screen/AboutMe";
import Services from "../pages/Screen/Services";
import Skills from "../pages/Screen/Skills";
import Latest from "../pages/Screen/Latest";
import Footer from "../pages/Screen/Footer";
import Blogs from "../pages/Screen/Blogs";



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
            
                    path: "/home",
                    element: <HomeScreen/>
                },
            {
            
                    path: "/about",
                    element: <AboutMe/>
                },
            {
            
                    path: "/service",
                    element: <Services/>
                },
            {
            
                    path: "/skills",
                    element: <Skills/>
                },
            {
            
                    path: "/latest",
                    element: <Latest/>
                },
            {
            
                    path: "/blogs",
                    element: <Blogs/>
                },
            {
            
                    path: "/footer",
                    element: <Footer/>
                },
           
      
                {
                    path: "*",
                    element: <Error/>
                
            }
        ]
    },
   

])