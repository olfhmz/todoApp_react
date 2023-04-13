import { ITodos} from '../../store/reducers/todoSlice';
import TodoItem from '../TodoItem/TodoItem';

function TodoList(props: ITodos) {

	return (
		<ul>
			{
				props.arrTodo.length 
				?	props.arrTodo.map(todo => (
					<TodoItem todo={todo} key={todo.id}/>))
				:	<span className='havntTodoMessage'>you don't have any todos</span>
			}
		</ul>
	);
}

export default TodoList;