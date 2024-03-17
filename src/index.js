import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MobileApp from './MobileApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='md:block hidden'>
      <App />
    </div>
    <div className='md:hidden block'>
      <MobileApp />
    </div>
  </React.StrictMode>
);
