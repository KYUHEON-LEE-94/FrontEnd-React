import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClientXY from './ClientXY';
import App from './App';
import AppCopy from './AppCopy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <ClientXY/> */}
     <App/>
     <AppCopy/>
  </React.StrictMode>
);

