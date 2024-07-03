import { useState } from "react";
import "./App.css";

// Response from API
const courses = [
  {
    id: 1,
    name: "React",
  },
  {
    id: 2,
    name: "Angular",
  },
  {
    id: 3,
    name: "Vue",
  },
];

function App() {
  const [checked, setChecked] = useState([]);

  console.log(checked);

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = () => {
    // call API
    console.log({ id: checked });
  };

  return (
    <div className="App">
      <header className="App-header">
        {courses.map((course) => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
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
