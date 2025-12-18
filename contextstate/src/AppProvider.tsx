import { useState } from 'react';
import { TodoContext } from './contexts/TodoContext';
import './App.css'
import type {TodoContextType, Todo} from './types';
import { mockTodos } from './data/mockTodos';



export function AppProviders({children}:{children: React.ReactNode}) {
  const [todos,setTodos] = useState<Todo[]>(mockTodos);

  function addTodo(text:string){
    const newTodo: Todo ={
        id: Date.now(),
        text,
        completed: false,
    };
    setTodos(prev => [...prev,newTodo]);
  }

 


 function toggleTodo(){}
 function deleteTodo(){}
 function editTodo(){}
 function clearCompleted(){}

 const value ={todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted}


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


