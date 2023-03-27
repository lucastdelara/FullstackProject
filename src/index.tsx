import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from ;
import { ContactsProvider } from ;
import { BrowserRouter } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactsProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ContactsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
