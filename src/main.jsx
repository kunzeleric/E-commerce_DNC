import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import './index.scss';
import Payment from "./views/Payment/Payment";
import { PRODUCTS_MOCK } from "../src/mock/product.mock"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={PRODUCTS_MOCK} />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/products/:productId", //productId é uma "sub-rota" do componente produto, a chave que indica pra qual produto será direcionado
    element: <Products  data={PRODUCTS_MOCK} />,
  },
  {
    path: "/payment/:paymentId", //paymentId
    element: <Payment  data={PRODUCTS_MOCK} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
