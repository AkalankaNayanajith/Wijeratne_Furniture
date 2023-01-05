import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ThemeProvider from './Theme/Index';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-qj1jvdueqm0qk8po.us.auth0.com";
const clientId = "hHMCCg8itXwyM6ZiqETvOKfwRQunyp6Y";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider 
  domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin}>
    <ThemeProvider> 
    <App />
    </ThemeProvider>
  </Auth0Provider>
);
