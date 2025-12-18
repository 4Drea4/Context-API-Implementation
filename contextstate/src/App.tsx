import { TodoContext } from './contexts/TodoContext'
import './App.css'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

export default function App(){


  return (
    <main>
      <TodoInput/>
      <TodoList/>
    </main>
  )
}
 

export default App;
