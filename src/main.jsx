import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainRouter from './Routers/MainRouter';
import Home from './Routers/Home';
import ListedBooks from './Routers/ListedBooks';
const router = createBrowserRouter([
  {
    path : "/",
    element : <MainRouter></MainRouter>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/listed",
        element : <ListedBooks></ListedBooks>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
