import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { delExpense } from '../features/expenseSlice';

function Expenses({ id }) {

    const expenses = useSelector((state) => state.expenses);
    const expense = expenses.find((expense) => expense.id == id)
    

    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log(id)
        dispatch(delExpense(id))
    }


  return (
    <div className="w-full min-w-[300px] max-w-md bg-white rounded-xl shadow-md p-5 space-y-4 my-[15px] hover:">
      
      {/* Amount */}
      <h2 className="text-2xl font-semibold text-green-600">
        ₹{expense.amount}
      </h2>

      {/* Two column details */}
      <div className="flex justify-between text-sm text-gray-700">
        
        {/* Left side */}
        <div className="space-y-2">
          <p><span className="font-medium">Name:</span>{ expense.product }</p>
          <p><span className="font-medium">Category:</span>{ expense.category }</p>
        </div>

        {/* Right side */}
        <div className="space-y-2 text-right">
          <p><span className="font-medium">Date:</span>{ expense.date }</p>
          <p><span className="font-medium">Desc:</span>{ expense.date }</p>
          <button className='bg-red-500 text-white text-medium cursor-pointer py-[5px] px-[12px] rounded-lg ' onClick={handleDelete}>Delete</button>
        </div>

      </div>

    </div>
  );
}

export default Expenses