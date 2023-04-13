import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ITodo from "../../models/ITodo";

export interface ITodos {
	arrTodo: ITodo[]
}

const initTodoSlice: ITodos = {
	arrTodo: []
}

const todoSlice = createSlice({
	name: 'TodoList',
	initialState: initTodoSlice,
	reducers: {
		addTodo(state, actions: PayloadAction<ITodo>) {
			if (actions.payload.task.trim().length)
				state.arrTodo.push(actions.payload);
		},

		removeTodo(state, actions: PayloadAction<string>) {
			state.arrTodo = state.arrTodo.filter(todo => todo.id !== actions.payload);
		},

		toggleTodoComplete(state, actions: PayloadAction<ITodo>) {
			const toggledTodo = state.arrTodo.find(todo => todo.id === actions.payload.id);
			if (toggledTodo)	
				toggledTodo.completed = !toggledTodo.completed;
		},

		deletecompleted(state) {
			state.arrTodo = state.arrTodo.filter(todo => todo.completed !== true);
		},

		changeTodo(state, actions: PayloadAction<{todo: ITodo, newTask: string}>) {
			const todo = state.arrTodo.find(todo => todo.id === actions.payload.todo.id);
			if (todo && actions.payload.newTask.trim())
				todo.task = actions.payload.newTask;
		},

		sortByTask(state) {
			state.arrTodo = state.arrTodo.sort((a, b) => {return (+a.task - +b.task ? 1 : -1)});
		},

		sortBycomplet(state) {
			state.arrTodo = state.arrTodo.sort((a) => {return (a.completed ? 1 : -1)});
		},
	}
})

export const {	addTodo, 
				removeTodo, 
				toggleTodoComplete, 
				deletecompleted,
				changeTodo,
				sortByTask,
				sortBycomplet,
				} = todoSlice.actions;

export default todoSlice.reducer;