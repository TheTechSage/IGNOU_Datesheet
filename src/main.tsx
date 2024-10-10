import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Home from './pages/Home.tsx';
import Datesheet from './pages/Datesheet.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Layout from './Layouts/Layout.tsx';
import Dates from './pages/Dates.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "dates",
        element: <Dates />,
        errorElement: <ErrorPage />,
      },    
      {
        path: "datesheet",
        element: <Datesheet />,
        errorElement: <ErrorPage />,
      },    
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
