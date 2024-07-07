import { useEffect } from 'react';
import './App.css'
import { useRef } from 'react';
import Video from './Videos';

function App() {
  const videoRef = useRef()

  useEffect(() => {
    console.log(videoRef.current)
  })

  const handlePlay = () => {
    // console.log(videoRef.current.remove())

    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  return ( 
    <div className="App-header"> 
     <Video ref={videoRef}/>
     <div style={{display: 'flex'}}>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
     </div>
    </div>
   );
}

export default App;