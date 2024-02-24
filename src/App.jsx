import { useState } from "react";
import "./App.css";

function App() {
  let colors = ["maroon", "orange","red", "wheat", "blue", "pink", "purple", "yellow"];
  let [color, setColor] = useState("black",colors[0]);
  let [count, setCount] = useState(0);

  return (
    <>
      <div className="background" style={{ backgroundColor: color }}>
        <h1>Click the button to change the background color</h1>
        <p>Current color is {color}</p>
        <button
          onClick={()=>{
            count<colors.length-1? setCount(count + 1) : setCount(0)
           console.log(colors[count])
            setColor(colors[count]);
          }}
        >
          Click Me
        </button>
      </div>
    </>
  );
}

export default App;
