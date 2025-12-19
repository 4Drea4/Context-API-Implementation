import { useState } from 'react';
import { TodoContext } from './TodoContext';
// import './App.css';
import type { Todo, Theme } from '../types';
import { mockTodos } from '../data/mockTodos';
import { ThemeContext } from './ThemeContext';


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

    const [theme, setTheme] = useState<Theme>("light");
    function toggleTheme(){
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    const themeValue = {theme, toggleTheme};

  return (
       

    <ThemeContext.Provider value={themeValue}>
         <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    </ThemeContext.Provider>
       

  
    
  );
}


