import { createContext, useContext } from "react";

const todoContext = createContext({
    tasks: [
        {
            id: 1,
            task: "DSA",
            completed: false
        }
    ],
    addTask: (todo) => {},
    editTask: (id, todo) => {},
    deleteTask: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo =  () => {
    return useContext(todoContext);
}

export const TodoProvider = todoContext.Provider;