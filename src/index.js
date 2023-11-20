import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/Store';
import { PersistGate } from 'redux-persist/lib/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NextUIProvider>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
                </PersistGate>
        </Provider>
    </NextUIProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
