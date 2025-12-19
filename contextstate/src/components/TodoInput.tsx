import {useState} from 'react';
import { useTodos } from '../contexts/TodoContext';

export default function TodoInput(){
    const [text, setText] = useState("");
    const {addTodo} = useTodos();

    function handleSumbit(event: React.FormEvent){
        event.preventDefault();
        console.log("Add todo input");
        if(!text.trim()) return;
        addTodo(text);
        setText("");
    }
    return(
        <form onSubmit={handleSumbit}>
           <input
           value={text}
           onChange={(event) => setText(event.target.value)}
           placeholder='Add your todo'
        />
        <button type="submit">Add</button>
        
        </form>
    )

}