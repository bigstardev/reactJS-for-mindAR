import React, { useState } from 'react';
import 'mind-ar';
import './App.css';
import MindARViewer from './mindar-viewer';

function App() {
  const [started, setStarted] = useState(false);
  return (
    <div className="App">
      <h1>React component with <a href="https://github.com/hiukim/mind-ar-js" target="_blank">MindAR</a></h1>

      <div>
        {!started && <button onClick={() => { setStarted(true) }}>Enter the AR world!</button>}
        {started && <button onClick={() => { setStarted(false) }}>Go Home</button>}
      </div>

      {started && (
        <div className="container">
          <MindARViewer />
          <video></video>
        </div>
      )}
    </div>
  );
}

export default App;
