import { withCardon } from "cardon";
import React from "react";

interface Props {
    title: string
} 

export default withCardon<Props, boolean>(function MyModalCard({visible, get, title}) {
  return (
    <div className="Modal">
      My Reusable '{title}' Card!
      <button onClick={get(true)}>Yes</button>
      <button onClick={get(false)}>No</button>
    </div>
  );
}
);