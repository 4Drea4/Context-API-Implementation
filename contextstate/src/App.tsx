import { TodoContext } from './contexts/TodoContext'
import './App.css'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import ThemeToggle from './components/ThemeToggleButton';


export default function App(){


  return (
    <main>
      <ThemeToggle/>
      <h1>Todo </h1>
      <TodoInput/>
      <TodoList/>
    </main>
  )
}
 

