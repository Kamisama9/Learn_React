import { useState } from "react";
const ConditionalRender = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ?<h1>Hi! Pratyush</h1> : <h1>Hello, Guest</h1>}
    <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Toggle</button>
    </div>
  )
}

export default ConditionalRender
