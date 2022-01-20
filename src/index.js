import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
// import { authMiddleware } from './components/redux/authMiddleware';
import { Provider } from 'react-redux';
import { rootReducer } from './components/redux/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
// import {authSaga} from './components/saga/authSaga'
import { rootSaga } from './components/saga/rootSaga';

const sagaMiddleware=createSagaMiddleware()

const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)



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


