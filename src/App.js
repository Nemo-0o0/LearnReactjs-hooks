import {useState} from 'react'
import './App.css';


const gifts = [
  'CPU CORE I9',
  'RAM 100TB',
  'HDD 100TB',
  'SSD 100TB',
]
function App() {

  const [gift, setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)

    setGift(gifts[index])
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>{gift || 'Chua co Phan Thuong'}</h1>
        <button onClick={randomGift}>LAy Thuong</button>
      </header>
    </div>
  );
}

export default App;
