import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor} from './redux/store';
// import { BrowserRouter } from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter
          // BrowserRouter 
        basename="/tweets">
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
