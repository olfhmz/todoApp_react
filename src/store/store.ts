import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducers/todoSlice";
import textSlice from "./reducers/textSlice";
// import groupSlice from "./reducers/groupSlice";

const rootReducer = combineReducers({
	todoSlice,
	textSlice,
	// groupSlice
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']