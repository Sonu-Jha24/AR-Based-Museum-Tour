import React, { useState } from 'react';
import WorldBackground from './components/WorldBackground';

function App() {
  // State to track which monument is selected in the carousel
  const [activeMonument, setActiveMonument] = useState('taj');

  return (
    <div className="App">
      <WorldBackground activeMonument={activeMonument} />
      
      <div className="ui-content">
        <h1>ExhibitX</h1>
        <button onClick={() => setActiveMonument('taj')}>India: Taj Mahal</button>
        <button onClick={() => setActiveMonument('qutub')}>India: Qutub Minar</button>
        {/* Your carousel and dashboard go here */}
      </div>
    </div>
  );
}

export default App;