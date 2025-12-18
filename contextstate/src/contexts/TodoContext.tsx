import {createContext, useContext} from 'react';
import type { TodoContextType } from '../types';
import type { Todo } from '../types';

export type TodoContextValue = {

    todos: Todo[];
    addTodo: (text:string) => void;
    toggleTodo: (id:number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newText:string) => void;
    clearCompleted: ()=> void;
    
};
    export const TodoContext = createContext<TodoContextType| null>(null);

    export function useTodos(){
        const context = useContext(TodoContext);
        if (!context) {
            throw new Error("Todo context");
        }
        return context;
    }