interface ITodo {
	id: string
	task: string
	completed: boolean
	group: string
}

export interface ITodoProps {
	todo: ITodo;
}

export default ITodo;