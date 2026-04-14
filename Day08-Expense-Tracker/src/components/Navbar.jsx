import darkBtn from "../assets/night-mode.png"
import lightBtn from "../assets/sleep-mode.png"
import { useSelector } from 'react-redux'

function Navbar({ darkMode, setDarkmode }) {

    const expenses = useSelector((state) => state.expenses)
    const filterBy = useSelector((state) => state.filterBy)



    const getTotalExpense = () => {
        if(expenses && expenses.length > 0){
            let sum = 0
            expenses.forEach((expense) => {
                console.log(expense)
                if(filterBy === "all" || filterBy === expense.category)
                    sum += expense.amount
            });
            return sum;
        }else
            return 0
    }

  return (
    <div className={`w-[80%] mx-auto flex flex-col text-center md:flex-row justify-between items-center px-[15px] py-[20px] ${ darkMode ? "bg-[#3A3E6D]" : "bg-[#F2F1EC]" } rounded-xl shadow-md`}>
        <h2 className={`font-medium font-[system-ui] hover:text-[15px] transition-all duration-200 ${ darkMode ? "text-white" : "" }`}>Benzene expense tracker</h2>
        <img className="cursor-pointer" src={darkMode ? darkBtn : lightBtn} alt="theme btn" onClick={() => setDarkmode((prev) => !prev)} />
        <h2 className={`font-medium font-[system-ui] hover:text-[15px] transition-all duration-200 ${ darkMode ? "text-white" : "" }`}>Total Expense: <span className="font-semibold text-green-600">{getTotalExpense()}</span></h2>
    </div>
  )
}

export default Navbar