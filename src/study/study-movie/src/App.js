import { useState, useEffect } from "react";

function App() {

  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter(prev => prev + 1);
  }
  console.log("i run all the time");

  useEffect(() => {
    console.log("CALL THE API");
  }, [])

  return (
    <div>
      <span>total clics: {counter}</span>
      <button onClick={onClick}>click me</button>
    </div>
  )
}

export default App;