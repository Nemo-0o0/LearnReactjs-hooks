import { useCallback, useState } from "react";
import "./App.css";
import Content from "./Content";

// 1. memo() -> Higher Order Component (HOC)
// 2. usCallback()
    // - Render types
    // - React memo()

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, [])

  return (
    <div className="App-header">
      <Content onIncrease={handleClick} />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
