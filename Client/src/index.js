import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { composeWithDevTools } from "redux-devtools-extension";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore,compose,applyMiddleware } from 'redux';
// import { reducers } from './components/reducer';
import thunk from 'redux-thunk';
import authReducer from './reducer/auth';



const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(authReducer, composeWithDevTools(applyMiddleware(thunk)));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
