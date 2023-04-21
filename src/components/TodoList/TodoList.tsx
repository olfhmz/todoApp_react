import ITodo from '../../models/ITodo';
import TodoItem from '../TodoItem/TodoItem';

function TodoList(props: {arrTodo: ITodo[]}) {
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