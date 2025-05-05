if (process.env.NODE_ENV !== "production") {
    
    require("dotenv").config();
  }
  


import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import About from "./Components/About.js";

import Meals from './Components/Meals.js';
import { createBrowserRouter, RouterProvider,Outlet } from "react-router";
import Footer from "./Components/Footer.js";
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
           <Footer />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Body /> },
           
            { path: "/about", element: <About /> },
            {path:"/meals",element:<Meals />}

        ],
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
