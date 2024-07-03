import { useState } from "react";
import "./App.css";
import Content from "./Content";

// Mounted / Unmounted

function App() {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Bấm vào đi</button>
        {show && <Content />}
      </header>
    </div>
  );
}

export default App;
