import { createSlice, nanoid } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        expenses : [],
        filterBy: ""
    },
    reducers:{
        addExpense: (state, action) => {
            const newExpense = {
                id: nanoid(),
                product: action.payload.product,
                amount: action.payload.amount,
                category: action.payload.category,
                desc: action.payload.desc,
                date: action.payload.date
            }
            state.expenses.push(newExpense);
        },
        delExpense: (state, action) => {
            state.expenses = state.expenses.filter((expense) => expense.id !== action.payload);
        },
        changeFilter: (state, action) => {
            state.filterBy = action.payload
        }
    }
});

export const { addExpense, delExpense, changeFilter } = expenseSlice.actions

export default expenseSlice.reducer