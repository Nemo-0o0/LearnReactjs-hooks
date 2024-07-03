import {useState} from 'react'
import './App.css';

function App() {

  const [name ,setName] = useState('')
  const [email ,setEmail] = useState('')

  const handleSubmit = () => {
    console.log({
      name,
      email
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <input 
        value={name}
          onChange={e => setName(e.target.value)}
        />
        <input 
        value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>change</button>
      </header>
    </div>
  );
}

export default App;
