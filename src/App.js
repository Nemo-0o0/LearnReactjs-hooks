import {useState} from 'react'
import './App.css';


// Response from API
 const courses = [
  {
    id: 1,
    name: 'React'
  },
  {
    id: 2,
    name: 'Angular'
  },
  {
    id: 3,
    name: 'Vue'
  },
]

function App() {

  const [checked, setChecked] = useState(2)

  console.log(checked)

  const handleSubmit = () => {
    // call API
    console.log({id: checked})
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {courses.map(course => (
          <div key={course.id}>
            <input type='radio'
            checked={checked === course.id}
              onChange={() => setChecked(course.id)}
            />
            {course.name}
          </div>
        ))}
        <button onClick={handleSubmit}>Register</button>
      </header>
    </div>
  );
}

export default App;
