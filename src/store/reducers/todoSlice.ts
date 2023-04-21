import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ITodo from "../../models/ITodo";
import IGroup from "../../models/IGroup";

export interface ITodos {
	arrTodo: ITodo[],
	filterTodo: ITodo[],
	groups: IGroup[],
	selectedGroup: string
	
}

const initTodoSlice: ITodos = {
	arrTodo: [],
	filterTodo: [],
	groups: [{id: 'noneGroup', groupName: 'none'}],
	selectedGroup: ''
}

const todoSlice = createSlice({
	name: 'TodoList',
	initialState: initTodoSlice,
	reducers: {
		addTodo(state, actions: PayloadAction<ITodo>) {
			if (actions.payload.task.trim().length) {
				state.arrTodo.push(actions.payload);
				state.filterTodo = state.arrTodo;
			}
		},

		removeTodo(state, actions: PayloadAction<string>) {
			state.arrTodo = state.arrTodo.filter(todo => todo.id !== actions.payload);
			state.filterTodo = state.arrTodo;
		},

		toggleTodoComplete(state, actions: PayloadAction<ITodo>) {
			const toggledTodo = state.arrTodo.find(todo => todo.id === actions.payload.id);
			if (toggledTodo)	
				toggledTodo.completed = !toggledTodo.completed;
			state.filterTodo = state.arrTodo;
		},

		deletecompleted(state) {
			state.arrTodo = state.arrTodo.filter(todo => todo.completed !== true);
			state.filterTodo = state.arrTodo;
		},

		changeTodo(state, actions: PayloadAction<{todo: ITodo, newTask: string}>) {
			const todo = state.arrTodo.find(todo => todo.id === actions.payload.todo.id);
			if (todo && actions.payload.newTask.trim()) {
				todo.task = actions.payload.newTask;
				state.filterTodo = state.arrTodo;
			}
		},

		sortByTask(state) {
			state.arrTodo = state.arrTodo.sort((a, b) => {return (+a.task - +b.task ? 1 : -1)});
			state.filterTodo = state.arrTodo;
		},

		sortBycomplet(state) {
			state.arrTodo = state.arrTodo.sort((a) => {return (a.completed ? 1 : -1)});
			state.filterTodo = state.arrTodo;
		},

		changeSelected(state, actions: PayloadAction<{groupName: string, flag: 'sort' | 'todoGroup', todo?: ITodo}>) {
			if (actions.payload.flag === 'sort')
				state.selectedGroup = actions.payload.groupName;
			else if (actions.payload.flag === 'todoGroup') {
				if (actions.payload.todo) {
					const todo = state.arrTodo.find(todo => todo.id === actions.payload.todo?.id);
					todo!.group = actions.payload.groupName;
				}
			}
		},

		addGroup(state, actions: PayloadAction<string>) {
			if (actions.payload.trim().length)
				state.groups.push({id: new Date().toISOString(), groupName: actions.payload})
		},

		filterByGroup(state, actions: PayloadAction<string>) {
			state.filterTodo = state.arrTodo.filter((todo) => {return (todo.group === actions.payload ? true : false)});
			if (actions.payload === 'none') {
				state.filterTodo = state.arrTodo;
			}
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
				addGroup,
				changeSelected,
				filterByGroup,
				} = todoSlice.actions;

export default todoSlice.reducer;