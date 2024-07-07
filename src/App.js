import Content from "./Content";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

// Context
// CompA => CompB => CompC

// theme: Dark / Light

function App() {
  const context = useContext(ThemeContext)
  return (
      <div className="App-header">
        <button onClick={context.toggleTheme}>Toggle theme</button>
        <Content />
      </div>
  );
}

export default App;
