import { combineReducers, configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import categoriesReducer from "../Redux/SliceCategorias"
import productsReducer from "../componentes/Pages/Productos/ProductsSlice"
import cartReducer from "../componentes/Pages/Productos/Carrito/CartSlice"
import userReducer from "./User/UserSlice"
import ordersReducer from "./Order/OrderSlice"

const reducers = combineReducers({
   categories: categoriesReducer,
   products: productsReducer,
   cart: cartReducer,
   user: userReducer,
   orders: ordersReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user', 'orders'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck:false,
    
  })
});

export const persistor = persistStore(store);