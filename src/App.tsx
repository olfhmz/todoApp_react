import InputForm from "./components/InputForm/InputForm";
import TodoList from "./components/TodoList/TodoList";
import { useAppSelector } from "./store/hooks";


function App() {

  const store = useAppSelector(store => store)
  
  return (
    <div className="wrapper">
        <InputForm />
        <TodoList arrTodo={store.todoSlice.arrTodo} />
    </div>
  );
}

export default App;
