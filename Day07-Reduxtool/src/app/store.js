import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todoSlice'

const loadState = () => {
    try{
        const stored = localStorage.getItem("todos");
        return stored ? { todos: JSON.parse(stored) } : undefined
    }
    catch{
        return undefined
    }
}

const saveState = (state) => {
    localStorage.setItem("todos",JSON.stringify(state.todos))
} 

export const store = configureStore({
    reducer: todoReducer,
    preloadedState: loadState()
})

store.subscribe(() => {
    saveState(store.getState())
})