import {useState} from 'react'
import './App.css';

/// tinh Tong
// const orders = [100 , 200 , 300]
function App() {
  const [info , setInfo] = useState({
    name : 'Vi',
    age : 20,
    address : 'Ha Noi'
  })

  const handleUpdate = () => {
    setInfo({
     ...info,
      bio : 'Thich An Chom Chom'
    })
  }
  /////////////////////////////////////////////////////

  // const [count, setCount] = useState(() => {
  //   const total = orders.reduce((total, cur) => total + cur)
  //   console.log(total)
  //   return total
  // })

  // const handleCrease = () => {
  //   setCount(count + 1)
  // }
  // Cong chi 1 lan


  // Cong nhieu lan
  // const handleCrease = () => {
  //   setCount(prev => prev + 1)
  // }
/////////////////////////////////////////////////
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>{count}</h1>
        <button onClick={handleCrease}>+</button> */}
        <h1>{JSON.stringify(info)}</h1>
        <button onClick={handleUpdate}>Update</button>
      </header>
    </div>
  );
}

export default App;
