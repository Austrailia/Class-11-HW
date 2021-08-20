import React, { useState } from 'react';
import "./App.css";

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  let [sumOfNumbers, setSumOfNumbers] = useState();

  const onChange1 = (a) => setNum1(a.target.value);

  const onChange2 = (a) => setNum2(a.target.value);

  const doAddition = () => setSumOfNumbers((+num1) + (+num2));

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>
      <div>
        <input value={num1} type="number" onChange={onChange1}/>
        <input value={num2} type="number" onChange={onChange2}/>
      </div>
      <button onClick={doAddition}>Add Them!</button>
      <h1 className="sumOfNumbers">{isNaN(sumOfNumbers) ? (sumOfNumbers = 0) : sumOfNumbers}</h1>
    </div>
  );
}

export default App;