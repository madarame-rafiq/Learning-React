import { useState, useCallback, useEffect, useRef } from "react";


function App(){

  const [length, setLength] = useState(8);

  const [includeNumbers, setIncludeNumbers] = useState(false);

  const [includeCharacters, setIncludeCharacters] = useState(false);

  const [password, setPassword] = useState("");

  //useCallback hooks stores the function on cache. Which prevents the re-creation of a function on every re-rendering, the dependency array inlcudes on which states it should be recreated.
  const passwordGenerator = useCallback(()=>{
    let psswd = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(includeCharacters)
      str += "!@#$%^&*()_+"
    
    if(includeNumbers)
      str += "1234567890"
    
    for(let i = 1; i <= length; ++i){
      let randomNum = Math.floor(Math.random() * str.length)
      console.log(randomNum)
      psswd += str.charAt(randomNum)
    }

    setPassword(psswd)
    console.log(password)

  },[length, includeCharacters, includeNumbers]);

  useEffect(()=>{
    passwordGenerator()
  },[length, includeCharacters, includeNumbers]);

  const copyToClipboard = useCallback(()=>{
    inputRef.current.select();
    window.navigator.clipboard.writeText(inputRef.current.value);
  },[length, includeCharacters, includeNumbers]);

  let inputRef = useRef(null);

  return(
    <div className="container">
      <h1>Password Generator</h1>
      <div className="paswdContainer">
        <input type="text"
          placeholder="Password Comes here"
          value={password}
          readOnly
          id="pswd"
          ref={inputRef}
          />
        <button id="copyBtn" onClick={copyToClipboard}>copy</button>
      </div>

      <div className="controls">
        <label htmlFor="setrange" className="lab">Length</label>
        <input type="range"
        min={8}
        max={23}
        value={length}
        id="setrange"
        onChange={(e) => setLength(e.target.value)}
        />
<br />
        <label htmlFor="enableChar" className="lab">Characters</label>
        <input type="checkbox" id="enableChar" onClick={()=>{ setIncludeCharacters(prev => !prev) }}/>
<br />
        <label htmlFor="enableNum" className="lab">Numbers</label>
        <input type="checkbox" id="enableNum" onClick={()=>{ setIncludeNumbers(prev => !prev) }}/>
      </div>
    </div>
  )
}

export default App