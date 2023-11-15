import { useState } from "react";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";

function App() {
  const [pressedBtn, setPressedBtn] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        outline: "1px solid #e3e3e3",
        padding: "2em 5em",
      }}
      id="drum-machine"
    >
      <DrumPad setPressedBtn={setPressedBtn} />
      <Display pressedBtn={pressedBtn} />
    </div>
  );
}

export default App;
