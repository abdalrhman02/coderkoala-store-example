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
import './Styles/AdminPage/adminPages.css';
import './Styles/Cart/cart.css';
import './Styles/ProfilePage/profile.css';

// Pages
import App from './App';
import AdminProductManagement from './Pages/Admin-Pages/AdminProductManagement';
import AdminOrdersManagement from './Pages/Admin-Pages/AdminOrdersManagement';
import AdminWebsiteEdits from './Pages/Admin-Pages/AdminWebsiteEdits';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';
import ProfilePage from './Pages/Profile-Pages/ProfilePage';
import Notifications from './Pages/Profile-Pages/Notifications';


const router = createBrowserRouter([
  {path:"/", element: <App/>, },
  {path:"AdminProductManagement", element: <AdminProductManagement/>, },
  {path:"AdminOrdersManagement", element: <AdminOrdersManagement/>, },
  {path:"AdminWebsiteEdits", element: <AdminWebsiteEdits/>, },
  {path:"productPage", element: <ProductPage/>, },
  {path:"Cart", element: <Cart/>, },
  {path:"ProfilePage", element: <ProfilePage/>, },
  {path:"Notifications", element: <Notifications/>, },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
