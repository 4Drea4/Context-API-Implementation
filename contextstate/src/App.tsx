import './App.css'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import ThemeToggle from './components/ThemeToggleButton';
import { useTheme } from './contexts/ThemeContext';


export default function App(){
const {theme} = useTheme();

  return (
    <main className={theme}>
      <ThemeToggle/>
      <h1>Todo </h1>
      <TodoInput/>
      <TodoList/>
    </main>
  )
}
 

