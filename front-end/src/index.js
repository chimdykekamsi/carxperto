import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-tailwind/react';
import { MaterialTailwindControllerProvider } from '../src/seller/context';
import { MaterialTailwindControllerProviders } from '../src/admin/context';
import { MaterialTailwindControllerProvidere } from './broker/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <MaterialTailwindControllerProviders>
        <MaterialTailwindControllerProvider>
          <MaterialTailwindControllerProvidere>
            <Provider store={store}>
              <App />
            </Provider>
          </MaterialTailwindControllerProvidere>
        </MaterialTailwindControllerProvider>
      </MaterialTailwindControllerProviders>
    </ThemeProvider>
  </React.StrictMode>
);
