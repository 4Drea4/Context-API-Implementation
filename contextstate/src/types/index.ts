export type Filter = "all" | "active" | "completed";
export type Theme = "light" | "dark";

export interface Todo {
    id: string | number;
    text: string;
    completed: boolean;
}
export interface TodoContextType {
    todos: Todo[]
    addTodo: (text:string) => void;
    toggleTodo: (id: string | number) => void;
    deleteTodo: (id: string | number) => void;
    editTodo: (id: string | number, newText: string) => void;
    clearCompleted: () => void;
    
}