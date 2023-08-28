import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import noticesSlice from './notices/notices-slice';
import { sortReducer } from './sort/sortSlice';
import { filterReducer } from './filter/filterSlice';
import { modalReducer } from './modal/modalSlice';
import { themeReducer } from './theme/themeSlice';
import { langReducer } from './lang/langSlice';

import petsReducer from './pets/petsSlice';



const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        notices: noticesSlice,
        sort:sortReducer,
        pets: petsReducer,
        filter: filterReducer,
        modal: modalReducer,
        theme:themeReducer,
        lang:langReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
