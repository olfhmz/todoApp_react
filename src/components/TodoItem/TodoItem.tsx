import { ITodoProps } from "../../models/ITodo";
import { useAppDispatch } from "../../store/hooks";
import { changeTodo, removeTodo, toggleTodoComplete } from "../../store/reducers/todoSlice";
import classes from './TodoItem.module.css';

function TodoItem(todoProps: ITodoProps) {

	const dispatch = useAppDispatch();

	const todo = todoProps.todo;

	return (
		<li >
			<div>
				<label>
					<span>completed : </span>
					<input	type="checkbox" 
							checked={todo.completed}
							onChange={() => dispatch(toggleTodoComplete(todo))}/>
					<h2 className={classes.taskText}>{todo.task}</h2>
				</label>
			</div>
		
			<div>
				<button	className={classes.changeBtn}
						onClick={(e) => {let newTask = prompt('Как изменим? ', '');
										if (newTask)	
											dispatch(changeTodo({todo, newTask}))}}>
					<img src={require("../../img/change.png")} alt="" />
				</button>
			
				<button className={classes.removeBtn}
						onClick={() => {dispatch(removeTodo(todo.id))}}>
					<img src={require("../../img/remove.svg").default} alt="" />
				</button>
			</div>
	</li>
	);
}

export default TodoItem;