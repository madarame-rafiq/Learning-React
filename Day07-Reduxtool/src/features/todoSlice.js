import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{
            id: 1,
            title: "Hellow",
            completed: false
        }]
    },
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        delTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, title: action.payload.newTitle } : todo)
        }
    }
});

export const { addTodo, delTodo, completeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;