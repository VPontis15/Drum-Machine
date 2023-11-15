import drumPads from "../data/DrumBtn";
import { useEffect } from "react";

function DrumPad({ setPressedBtn }) {
  const play = (id) => {
    const audio = document.getElementById(id);
    console.log(id);
    if (!audio) return;
    audio.play();
    setPressedBtn(drumPads.find((btn) => btn.key === id).description);
  };
  function onClickedBtn(e) {
    setClickedBtn(drumPads.find((btn) => btn.key === e.target.value));
  }

  useEffect(() =>
    document.addEventListener(
      "keydown",
      function (event) {
        play(event.key.toUpperCase());
      },

      []
    )
  );

  return (
    <div>
      <div className="row">
        {drumPads.map((btn) => {
          return (
            <button
              className="drum-pad"
              id={btn.audio}
              value={btn.key}
              onKeyDown={(e) => {
                console.log(e.key);
                if (e.key.toUpperCase() === btn.key.toUpperCase())
                  console.log("hey");
              }}
              onClick={() => play(btn.key)}
              key={btn.audio}
            >
              <audio className="clip" src={btn.audio} id={btn.key} />
              {btn.key.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DrumPad;
