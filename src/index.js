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
import './Styles/Header-Footer/headerFooter.css'

// Pages
import App from './App';


const router = createBrowserRouter([
  {path:"/", element: <App/>, },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
