import Expenses from "./components/Expenses"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "./features/expenseSlice"; 
import { useState } from "react";

function App() {

  const [darkMode, setDarkmode] = useState(false);


  const dispatch = useDispatch()


  const categories = [
    "all",
    "Food & Dining",
    "Groceries",
    "Transportation",
    "Fuel / Petrol",
    "Rent / Housing",
    "Utilities (Electricity, Water, Gas)",
    "Internet & Mobile",
    "Shopping",
    "Clothing",
    "Health & Medical",
    "Insurance",
    "Education",
    "Entertainment",
    "Travel",
    "Personal Care",
    "Subscriptions",
    "Loan / Debt",
    "Investments",
    "Gifts & Donations",
    "Business Expenses",
    "Others",
  ];

  const  expenses = useSelector((state) => state.expenses)
  const filterBy = useSelector((state) => state.filterBy)


  const handleFilterChange = (fill) => {
    dispatch(changeFilter(fill))
  }

  return (
    <>
      <div className={`w-screen min-h-screen px-[10px] py-[15px] ${darkMode ? "bg-[#0A1123]" : "bg-[#F9FAF5]"}`}>
        <Navbar darkMode={darkMode} setDarkmode={setDarkmode} />
        <Form darkMode={darkMode} />


        <span className={`text-2xl font-medium font-[system-ui] ${ darkMode ? "text-white" : "" } `}>Filter By:</span><select
          name="category"
          value={filterBy}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="w-[20%] mx[50%] p-3 border rounded-lg bg-[#F2F1EC] focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {
            filterBy === "all" ? expenses.map((expense) => (
                <Expenses key={expense.id} id={expense.id} darkMode={darkMode} />
              )):
            expenses
              .filter((expense) => filterBy === expense.category)
              .map((expense) => (
                <Expenses key={expense.id} id={expense.id} darkMode={darkMode} />
              ))
          }
          
        </div>
      </div>
    </>
  )
}

export default App
