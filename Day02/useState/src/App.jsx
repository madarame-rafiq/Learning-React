import { useState } from "react"

function App(){

  const[count, setCount] = useState(0)

  function incr(){
    setCount(count+1)
  }

  function decr(){
    if (count > 0)
    setCount(count-1)
  }

  function reset(){
    setCount(0)
  }

  return (
    <div className="container">
      <div className="num">{count}</div>
      <div className="btns">
         <button className="btn" onClick={incr}>+</button>
         <button className="btn" onClick={decr}>-</button>
         <button className="btn" onClick={reset}>reset</button>
      </div>
    </div>
  )
}

export default App
