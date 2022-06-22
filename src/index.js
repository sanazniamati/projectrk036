import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text, Rect } from "react-konva";

const App = () => {
  const [text, setText] = useState("");
  const handelDragStart = () => {
    setText("Drag Start");
  };
  const handelDragEnd = () => {
    setText("Drag End");
  };
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text
          text={text}
          x={10}
          y={10}
          fontSize={24}
          fontFamily={"Calibri"}
          fill={"black"}
        />
        <Rect
          x={20}
          y={100}
          offset={[50, 25]}
          width={100}
          height={50}
          fill={"#00D2FF"}
          stroke={"black"}
          strokeWidth={4}
          draggable
          onDragStart={handelDragStart}
          onDragEnd={handelDragEnd}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
