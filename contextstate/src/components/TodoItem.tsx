import { useTodos } from "../contexts/TodoContext";
import type { Todo } from "../types";

export default function TodoItem({todo} :{todo:Todo}){
    const {toggleTodo, deleteTodo} = useTodos();


return (
    <li>
        <label>
            <input 
            type = "checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id) }
            />
            {todo.text}
        </label>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>

        
    </li>
)

}