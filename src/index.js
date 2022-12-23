import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import {Provider as ReduxProvider} from 'react-redux'
import {store} from './store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StyledEngineProvider>
          <ReduxProvider store={store}>
              <App />
          </ReduxProvider>
      </StyledEngineProvider>
  </React.StrictMode>
);
