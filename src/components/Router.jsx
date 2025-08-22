import { createBrowserRouter } from "react-router";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from "../pages/Services";
import Carrear from '../pages/Carrear';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Layout from "./Layout";
import LandingPage from "./LandingPage";
import ProductList from "./ProductList";
import ProductsLists from "./ProductsLists";
const router=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"",
                element:<LandingPage/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"services",
                element:<Services/>
            },
            {
                path:"career",
                element:<Carrear/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"products",
                element:<ProductList/>

            },
            {
                path:"product",
                element:<ProductsLists/>

            },
            
            {
                path:"*",
                element:<NotFound/>
            }
        ]

    }
]);
export default router;