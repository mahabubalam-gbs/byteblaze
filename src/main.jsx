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
import BlogDetails from './pages/BlogDetails.jsx';
import Content from './components/Content.jsx';
import Author from './components/Author.jsx';
import { Toaster } from 'react-hot-toast';

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
        path: '/blog/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: 'author',
            element: <Author></Author>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ]
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      },
    ],
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </StrictMode>,
)
