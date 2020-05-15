import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />

      <Header />

      <Routes />
    </Provider>
  );
}

export default App;
