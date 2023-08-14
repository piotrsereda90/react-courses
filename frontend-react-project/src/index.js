import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

const rootElement = ReactDOM.createRoot(container);
if(rootElement){
  rootElement.render(
    <App/>
  )
}