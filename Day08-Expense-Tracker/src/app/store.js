import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/expenseSlice"

const loadExpenses = () => {
    try{
        const storedExpenses = localStorage.getItem("expenses")
        return storedExpenses ? {expenses: JSON.parse(storedExpenses), filterBy: "all"} : undefined 
    }catch{
        return undefined
    }
}

const saveExpenses = (state) => {
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
}

export const store = configureStore({
    reducer: expenseReducer,
    preloadedState: loadExpenses()
});

store.subscribe(() => {
    saveExpenses(store.getState())
})