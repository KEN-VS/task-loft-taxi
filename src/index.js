import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { authMiddleware } from './components/redux/authMiddleware';
import { Provider } from 'react-redux';
import { rootReducer } from './components/redux/rootReducer'

const store = createStore(rootReducer, applyMiddleware(authMiddleware))



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


