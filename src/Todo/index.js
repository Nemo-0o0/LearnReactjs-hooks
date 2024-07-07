import { useRef, useReducer } from "react";
import reducer, { initstate } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
import Logger from "./logger";

function Todo() {
  const [state, dispatch] = useReducer(Logger(reducer), initstate);
  const { job, jobs } = state;
  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  };

  return (
    <div className="App-header">
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter job"
        onChange={(e) => {
          dispatch(setJob(e.target.value));
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
export default Todo;
