import { useState } from "react";
import "./App.css";



function App() {

  const [job, setJob] = useState('')
  const [ jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    console.log(storageJobs)
    return storageJobs ?? []
  })

  console.log(job)

  // Render jobs
  const handleSubmit = () => {
    setJobs(prev => {

      const newJobs = [...prev, job]

      // Save local storage
      const jsonJobs = JSON.stringify(newJobs)

      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setJob('')
  }

  // clear Job
  const handleClear = () => {
    localStorage.removeItem('jobs')
    setJobs([])
  }

  /// KeyEnter Add
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input 
        value={job} 
        onChange={e => setJob(e.target.value)}
        onKeyPress={handleKey}
        />
        <button onClick={handleSubmit}>ADD</button>
        <button onClick={handleClear}>Clear</button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
