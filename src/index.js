import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// Styles
import './Styles/all.min.css';
import './Styles/GlobalRules/globalRules.css';
import './Styles/Components-Style/componentsStyle.css';
import './Styles/HomePage/homePage.css';
import './Styles/AdminPage/adminPage.css';
import './Styles/Cart/cart.css';

// Pages
import App from './App';
import AdminProductManagement from './Pages/Admin-Pages/AdminProductManagement';
import AdminOrdersManagement from './Pages/Admin-Pages/AdminOrdersManagement';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';


const router = createBrowserRouter([
  {path:"/", element: <App/>, },
  {path:"AdminProductManagement", element: <AdminProductManagement/>, },
  {path:"AdminOrdersManagement", element: <AdminOrdersManagement/>, },
  {path:"productPage", element: <ProductPage/>, },
  {path:"Cart", element: <Cart/>, },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
