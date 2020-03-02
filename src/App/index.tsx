import React from 'react';
import { CssBaseline } from '@material-ui/core';
import './Config/ReactotronConfig';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux';
import HistoryBrowser from './Utils/HistoryBrowser';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CssBaseline />
        <ToastContainer />
        <Router history={HistoryBrowser}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
