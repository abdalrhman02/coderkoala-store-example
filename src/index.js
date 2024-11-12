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

// Pages
import App from './App';
import Admin from './Pages/Admin';


const router = createBrowserRouter([
  {path:"/", element: <App/>, },
  {path:"admin", element: <Admin/>, },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
