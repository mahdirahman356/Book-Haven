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
import PagesToRead from './Routers/PagesToRead';
import Read from './Routers/Read';
import WishList from './Routers/WishList';
import Blog from './Routers/Blog';
import Resources from './Routers/Resources';
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
        path : "/redePage",
        element : <PagesToRead></PagesToRead>
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      },
      {
        path : '/resources',
        element : <Resources></Resources>
       },
      
      {
        path : "/listed",
        element : <ListedBooks></ListedBooks>,
        children : [
          {
            index : true,
            element : <Read></Read>
          },
          {
            path : "read",
            element : <Read></Read>
          },
          {
            path : "wish",
            element : <WishList></WishList>
          }
        ]

      },
      {
        path : "/books/:id",
        loader : ()=> fetch("/Books.json"),
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
