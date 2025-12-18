import {createContext, useContext} from 'react';
import type { TodoContextType } from '../types';


export const TodoContextValue = {
    
    todos: Todo[];
    addTodo: (text:string) => void;
    toggleTodo: (id:number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newText:string) => void;
    clearCompleted: ()=> void;
    
};
    export const TodoContext = createContext<TodoContextType | null>(null);