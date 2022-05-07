import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";
import { SnackbarProvider } from 'notistack';
import Notification from './utils/notification';
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
    <div>
        <Provider store={store}>
            <SnackbarProvider
                anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'top',
                }}
                ref={Notification.reference}
                action={key => <div style={{ cursor: 'pointer' }} onClick={() => Notification.close(key)}>CLOSE</div>}
            >
                <PersistGate loading={null} persistor={persistor}>

                    <App />
                </PersistGate>

            </SnackbarProvider>
        </Provider>
    </div>,
    document.getElementById('root')
);