import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import About from "./Components/About.js";
import Menu from "./Components/Menu.js";
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
<<<<<<< HEAD
            
=======
           
>>>>>>> dc20e49032a8e6c25fe6044d8168fe58cad46e02
        ],
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
