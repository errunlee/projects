import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GithubProvider } from './context/Contexthead';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
// dev-5ybjoej436r47gjp.us.auth0.com
// 06jQ5r5QhUs2qbdCDNesRnWVMqfet4By
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain='dev-5ybjoej436r47gjp.us.auth0.com'
    clientId='06jQ5r5QhUs2qbdCDNesRnWVMqfet4By'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
    >
    <GithubProvider>
    <App />
    </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
