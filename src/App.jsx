
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  


  return (
    <div className="App">
      <div>
      <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'/>
      <a-entity camera></a-entity>
      </div>
      
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        
    </div>
  )
}

export default App
