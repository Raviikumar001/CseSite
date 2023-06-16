import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from './context/appContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <AppProvider> */}
      <BrowserRouter>
      <App />
      </BrowserRouter>

  {/* </AppProvider> */}
  
  </React.StrictMode>
)
