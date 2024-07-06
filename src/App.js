import { useState, useMemo, useRef } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  // focus input
  const nameRef = useRef()

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName('')
    setPrice('')

    // focus input
    nameRef.current.focus()
  };

  console.log(products);

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {

      console.log('Tinhs toan lai ....')
  
      return result + prod.price
    }, 0);

    return result;
  }, [products])

  return (
    <div className="App-header">
      <input
      ref={nameRef}
        value={name}
        placeholder="Enter name...."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price...."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Tong: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
