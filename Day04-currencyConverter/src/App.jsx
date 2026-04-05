
import { useEffect, useState } from "react"
import InputBox from "./components/InputBox"
import currencyInfo from "./hooks/currenceInfo"

function App(){

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");

  const [convertedAmount, setConvertedAmount] = useState(0);
  const [to, setTo] = useState("usd");

  const data = currencyInfo(from)
  
  const currencyCalculate = ()=>{
    if(data[to])
      setConvertedAmount(amount * data[to])
  }

  const option = Object.keys(data)

  function swap(){
    setTo(from)
    setFrom(to)
  }

  return(
    <div className="container">
      <h1 id="heading">Currency Converter</h1>

      <form className="container" onSubmit={(e)=>e.preventDefault()} >
        <InputBox label="From" onChangeAmount={(am)=>setAmount(am)} disabled={false} options={option} onCurrencyChange={(curr) => setFrom(curr)} amount={amount} currency={from} />
        
        <button className="swapBtn" onClick={swap}>Swap</button>
        
        <InputBox label="To" disabled={true} options={option} onCurrencyChange={(curr) => setTo(curr)} amount={convertedAmount} currency={to} />

        <button className="swapBtn" onClick={currencyCalculate}>Convert {from} to {to}</button>
        


      </form>
      
    </div>
  )
}

export default App