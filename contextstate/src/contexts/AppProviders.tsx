import { useState } from 'react';
import { TodoContext } from './TodoContext';
// import './App.css';
import type { Todo } from '../types';
import { mockTodos } from '../data/mockTodos';



export function AppProviders({children}:{children: React.ReactNode}) {
  const [todos,setTodos] = useState<Todo[]>(mockTodos);

  function addTodo(text:string){
    const newTodo: Todo ={
        id: Date.now(),
        text,
        completed: false,
    };
    setTodos((todoArr)=> [...todoArr,newTodo]);
  }

 function toggleTodo(id:string | number){
    setTodos((todoArr) =>
       todoArr.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} :todo
))
 }
 function deleteTodo(id:string | number){
    setTodos((todoArr) => todoArr.filter((todo) => todo.id !==id
))
 }
  function editTodo(id: string | number, newText:string) {
    setTodos((todoArr) =>
        todoArr.map((todo) => (todo.id === id ? 
            {...todo, text: newText} : todo) )
        )
            }

    function clearCompleted(){
        setTodos((todoArr) => todoArr.filter((todo) => !todo.completed ));
   
    }
    const value ={todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted};


  return (
    <TodoContext.Provider value={value}>{children}
        {/* <FilterContext.Provider>
            <ThemeContext.Provider>
                {children}
            </ThemeContext.Provider>
        </FilterContext.Provider> */}

    </TodoContext.Provider>
    
  );
}


