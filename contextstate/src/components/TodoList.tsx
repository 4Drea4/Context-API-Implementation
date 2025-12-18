import { useTodos } from "../contexts/TodoContext";
import TodoItem from './TodoItem'

export default function TodoList(){
    const {todos} =  useTodos();

    if (todos.length === 0){
        return <p>Add a todos</p>
    }
    return(
        <ul>
            {todos.map((todo)=> (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    )
}