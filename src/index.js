import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store/store';
import { ThemeProvider } from './context/theme';

const client = new QueryClient();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>,
);
