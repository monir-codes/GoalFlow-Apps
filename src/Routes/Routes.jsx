import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root.jsx"
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx'
import Home from '../pages/Home/Home.jsx';


 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            Component:Home,
            loader: ()=> fetch("/info.json").then(res=> res.json())
        }
    ]
  },
]);
