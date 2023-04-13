interface ITodo {
	id: string
	task: string
	completed: boolean
}

export interface ITodoProps {
	todo: ITodo;
}

export default ITodo;