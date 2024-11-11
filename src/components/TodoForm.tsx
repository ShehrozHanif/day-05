import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e: React.FormEvent) => {
        e.preventDefault();

        if (!todo) return;

        // Create a new todo object with a unique ID
        const newTodo = {
            id: Date.now(),  // Generates a unique ID using the current timestamp
            todo,
            completed: false,
        };

        addTodo(newTodo);  // Pass the complete Todo object to addTodo
        setTodo("");
    };

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
