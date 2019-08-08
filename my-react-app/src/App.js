import React, {useState} from 'react';

import './App.css';


function App() {

  const [strike, setStrike]= useState(0)
  const [ball, setBall]= useState(0)

  const strikeCount = () => {
    setStrike(strike + 1)
    if (strike > 1) {
      setStrike(0)
    }  
}
  const ballCount = () => {
    setBall(ball + 1)
    if (ball >2) {
    setBall(0)
    }
}

const foulBall = () => {
  setStrike(strike + 1)
  if (strike > 1) {
    setStrike(2)
  }
}

const Hit = () => {
  setStrike(0)
  setBall(0)
}

   
    

  return (
    <div className="App">
      <div>Strike: {strike}</div>
      <div>Ball: {ball}</div>
      <button onClick={strikeCount}>Strike</button>
      <button onClick={ballCount}>Ball</button>
      <button onClick={foulBall}>Foul</button>
      <button onClick={Hit}>Hit</button>
    </div>
  );
}

export default App;
