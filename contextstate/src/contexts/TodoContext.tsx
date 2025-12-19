import {createContext, useContext} from 'react';
import type { TodoContextType } from '../types';


    export const TodoContext = createContext<TodoContextType| null>(null);

    export function useTodos(){
        const context = useContext(TodoContext);
        if (!context) {
            throw new Error("Todo context");
        }
        return context;
    }