import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import createScrollSnap from "scroll-snap";
import "./App.css";

function App() {
  const container = useRef(null);

  useEffect(() => {
    const element = container.current;

    if (element)
      createScrollSnap(
        element,
        {
          snapDestinationY: "90%",
        },
        () => console.log("snapped")
      );

    return;
  }, []);

  return (
    <div id="container" ref={container}>
      <div className="page first-page">
        <div>I</div>
        <div className="hint">scroll down</div>
      </div>
      <div className="page second-page">
        <div>II</div>
      </div>
      <div className="page third-page">
        <div>III</div>
      </div>
      <div className="page fourth-page">
        <div>IV</div>
        <div className="hint">scroll up</div>
      </div>
    </div>
  );
}

export default App;
