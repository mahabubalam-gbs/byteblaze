import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx';
import Mainlayout from './layouts/Mainlayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=19&top=7')
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      }
    ],
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
