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
import Error from './Error/Error';
import BookDetails from './Routers/BookDetails';
const router = createBrowserRouter([
  {
    path : "/",
    element : <MainRouter></MainRouter>,
    errorElement : <Error></Error>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/listed",
        element : <ListedBooks></ListedBooks>
      },
      {
        path : "/books/:id",
        loader : ()=> fetch("Books.json"),
        element : <BookDetails></BookDetails>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
