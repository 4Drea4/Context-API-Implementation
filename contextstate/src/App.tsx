import { TodoContext } from './contexts/TodoContext'
import './App.css'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

export default function App(){


  return (
    <main>
      <h1>Todo </h1>
      <TodoInput/>
      <TodoList/>
    </main>
  )
}
 

