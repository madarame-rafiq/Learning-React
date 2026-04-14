import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addExpense } from '../features/expenseSlice';

function Form() {


    const categories = [
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

  const dispatch = useDispatch()

    const [prodname, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [desc, setDesc] = useState("");
    const [cat, setCat] = useState("Others")
    const [date, setDate] = useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (prodname && amount > 0 && date){
      console.log("inside dispatch")
      dispatch(addExpense({product: prodname, amount: amount, category: cat, desc, date}))
      setName("")
      setAmount(0)
      setDesc("")
      setCat("Others")
      setDate("")
    }else{
      alert("Please fill the form")
    }
  }


  return (
    <div className="h-[600px] md:w-screen h-[700px] flex items-center justify-center bg-[#F9FAF5]">
      <form
      onSubmit={handleFormSubmit}
        className="w-[80%] md:w-full max-w-lg bg-[#F2F1EC] p-6 rounded-2xl shadow-2xl space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center font-sans">
          Create New Expense
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={prodname}
          onChange={(e) => setName(e.target.value)}
          placeholder="Expense Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Amount */}
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Amount"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Category */}
        <select
          name="category"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="w-full p-3 border rounded-lg bg-[#F2F1EC] focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Date (readonly default today) */}
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#BBB6B6] text-white cursor-pointer py-3 rounded-lg font-medium hover:bg-orange-300 transition"
        >
          Create Expense
        </button>
      </form>
    </div>
  );
}

export default Form