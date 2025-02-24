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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: '/blogs',
    element: <Blogs></Blogs>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
