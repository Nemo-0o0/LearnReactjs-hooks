import { useState, memo } from "react";
import "./App.css";
import Content from "./Content";

// 1. memo() -> Higher Order Component (HOC)
// 2. usCallback()

// Hooks
// HOC
// Render props

function App() {

  const [count, setCount] = useState(0)

  const handleClick = () => {
      setCount(count + 1)
  }

   return ( 
       <div className="App-header"> 
       <Content count={count}/>
           <h1>{count}</h1>
           <button onClick={handleClick}>Click me</button>
       </div>
    );

}

export default App;
