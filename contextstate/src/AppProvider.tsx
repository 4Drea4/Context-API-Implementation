import { useState } from 'react';
import { TodoContext } from './contexts/TodoContext';
import './App.css'

function AppProviders({children}:{children: React.ReactNode}) {
  const [todos,setTodos] = useState(mockTodos);


 function addTodo(){}
 function toggleTodo(){}
 function deleteTodo(){}
 function editTodo(){}
 function clearCompleted(){}

 const todosValue ={todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted}


  return (
    <TodoContext.Provider value={todosValue}>
        <FilterContext.Provider>
            <ThemeContext.Provider>
                {children}
            </ThemeContext.Provider>
        </FilterContext.Provider>

    </TodoContext.Provider>
    
  );
}

export default App;
