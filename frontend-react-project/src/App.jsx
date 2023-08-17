import React from 'react';
import StoreProvider from './store/StoreProvider';
import Header from './components/Header';

import './App.scss';

const App = () => (
  <StoreProvider>
    <Header/>
  </StoreProvider>
)

export default App;