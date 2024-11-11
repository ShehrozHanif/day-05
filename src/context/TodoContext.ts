import { createContext, useContext } from "react";

// Define a type for a todo item
export type Todo = {
    id: number;
    todo: string;
    completed: boolean;
};

// Define a type for the context
type TodoContextType = {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    updateTodo: (id: number, todo: string) => void;
    deleteTodo: (id: number) => void;
    toggleCompleted: (id: number) => void;
};

// Create the context with the specified type
export const TodoContext = createContext<TodoContextType>({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        },
    ],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleCompleted: () => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
