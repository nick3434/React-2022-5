import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./store";
import { Provider } from "react-redux";

// import views
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ProductView from "./views/ProductView";

// Create router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />
  },
  {
    path: "/about",
    element: <AboutView />
  },
  {
    path: "/product/:productId",
    element: <ProductView />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
