import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { 
	persistStore,
	persistReducer,
	FLUSH,
  	REHYDRATE,
  	PAUSE,
  	PERSIST,
  	PURGE,
  	REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoSlice from "./reducers/todoSlice";
import textSlice from "./reducers/textSlice";

const persistConfig = {
	key: 'root',
	storage,
}

const rootReducer = combineReducers({
	todoSlice,
	textSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);
	
const store =
	configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
		  serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		  },
		}),
	})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;