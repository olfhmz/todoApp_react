import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ITodo from "../../models/ITodo";

const initTextSlice: ITodo = {
	id: '',
	task: '',
	completed: false,
	group: 'none'
}

const todoSlice = createSlice({
	name: 'TodoList',
	initialState: initTextSlice,
	reducers: {
		setText(state, actions: PayloadAction<string>) {
			state.task = actions.payload;
			state.id = new Date().toISOString();
		}
	}
})

export const { setText } = todoSlice.actions;
export default todoSlice.reducer;