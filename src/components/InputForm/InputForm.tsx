import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setText } from '../../store/reducers/textSlice';
import { addTodo, deletecompleted, sortBycomplet, sortByTask } from '../../store/reducers/todoSlice';
import classes from './InputForm.module.css'

function InputForm() {

	const dispatch = useAppDispatch()

	const store = useAppSelector(store => store)

	return (
		<form className="input-form_container">
			<input	type="text" 
					value={store.textSlice.task} 
					placeholder='enter task'
					onChange={(e) => {dispatch(setText(e.target.value))}} 
					className={classes.input} />

    		<button type="submit" 
					onClick={(e) => {e.preventDefault();
									dispatch(addTodo(store.textSlice));
									dispatch(setText(''));}}
					className={classes.addButton} >
					add todo
			</button>

			<button	onClick={(e) => {e.preventDefault();
									dispatch(deletecompleted());}}
					className={classes.deletecompleted}>
				delete completed
			</button>

			<label className={classes.sort_container}> 
				<span>sort by  :  </span> 
					<button className={classes.sortBtn}
							onClick={(e) => {e.preventDefault();
									dispatch(sortByTask());}}>
						task
					</button>
					<button className={classes.sortBtn}
							onClick={(e) => {e.preventDefault();
									dispatch(sortBycomplet());}}>
						complet
					</button>
			</label>

		</form>
	)
}

export default InputForm;