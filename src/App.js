import { useRef, useReducer} from "react";
import "./App.css";

// useReducer
// 1.Init state
const initstate = {
  job: '',
  jobs: []
}

// 2.Action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}

// 3.Reducer
const reducer = (state, action) => {
  console.log("Old state: ", state)
  console.log("action: ", action)

  let newState
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
    break

    case ADD_JOB: 
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    break

    case DELETE_JOB: 
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)
      newState = {
        ...state,
        jobs: newJobs
      }
    break

    default:
      throw new Error("invalid action")
  }


  console.log("New state: ", newState)

  return newState
}
// 4.Dispatch

function App() {

  const [state, dispatch] = useReducer(reducer, initstate)
  const { job, jobs } = state
  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))

    inputRef.current.focus()
  }


  return (
    <div className="App-header">
      <input
      ref={inputRef}
        value={job}
        placeholder='Enter job'
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>ADD</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
