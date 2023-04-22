import ITodo from "../../models/ITodo";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeSelected, filterByGroup } from "../../store/reducers/todoSlice"
import classes from './GroupSelect.module.css'

function GroupSelect(porps: {flag: 'sort' | 'todoGroup', todo? : ITodo}) {

	const store = useAppSelector(store => store)
	const dispatch = useAppDispatch()

	return (
		<select className={classes.select}
				onChange={(e) =>	{dispatch(changeSelected({groupName: e.target.value, flag: porps.flag, todo: porps.todo}))
									if (porps.flag === 'sort') dispatch(filterByGroup(e.target.value))}}>
		{store.todoSlice.groups.map((group => (
			<option selected={porps.todo?.group === group.groupName}
					value={group.groupName}
					key={group.id}
					>{group.groupName}</option>)))}
		</select>
	);
}

export default GroupSelect;