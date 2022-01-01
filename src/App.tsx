import { useEffect, useRef } from "react";
import createScrollSnap from "scroll-snap";
import "./App.css";
import Projects from "./Projects";

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
        () => {}
      );

    return;
  }, []);

  return (
    // TODO: Remove the scroll bar from showing.
    // TODO: Make better scroll between screens.
    // TODO: Components bio page.
    // TODO: Add links too the bio page.

    <div id="container" ref={container}>
      <div className="page first-page">
        <div>hi</div>
        <div className="hint">
          <div >scroll down</div>
        </div>
      </div>
      <div className="page second-page">
        <div>i am Charlie</div>
      </div>
      <div className="page third-page">
        <div className="bio">{'I am a computer science student in the united kingdom'}<br/>{'I love to write code, working recently with AI and ML as well as multi-platform app development.'}<br/>{'Having been programming for over 10 years, starting with game development in pygame, I am always trying to improve although I will be the first to admit there are many people much better than me and there is always more too learn.'}<br/>{'Below are some of my favorite sources of development knowledge and I would highly recommend checking them out.'}</div>
        <div className="links">
          <button>CSS Videos</button>
          <button>Leet Code</button>
          <button>CSDojo</button>
        </div>
      </div>
      <div className="page fourth-page">
        <div>projects</div>
        <Projects />
      </div>
      <div className="page fifth-page">
        <div>skill set</div>
      </div>
      <div className="page sixth-page">
        <div>my socials</div>
        <div className="hint">scroll up</div>
      </div>
    </div>
  );
}

export default App;
