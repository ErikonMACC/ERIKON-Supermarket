import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const queryClient = new QueryClient()

import ProductList from "./routes/productList.tsx"
import ProductDetail from "./routes/product.tsx"
import ErrorPage from './routes/errorPage.tsx'
import ProductCategoryList from './routes/productCategoryList.tsx'
import SearchedProductList from './routes/searchedProductList.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"productList",
        element: <ProductList />
      },
      {
        path:"/productList/:id",
        element: <ProductDetail />
      },
      {
        path:"/productList/categories/:category",
        element: <ProductCategoryList />
      },
      {
        path:"/productList/searched/:search",
        element: <SearchedProductList />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
